from rest_framework import generics, status
from .serializers import RoomSerializer, CreateRoomSerializer, ListingSerializer, CreateListingSerializer
from .models import Room, Listing
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            first_name = serializer.data.get('first_name')
            last_name = serializer.data.get('last_name')
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key

            queryset = Room.objects.filter(host=host)

            if queryset.exists():

                room = queryset[0]

                room.first_name = first_name
                room.last_name = last_name
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=['guest_can_pause', 'votes_to_skip'])

                return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)

            else:
                room = Room(
                    host=host,
                    first_name=first_name,
                    last_name=last_name,
                    guest_can_pause=guest_can_pause,
                    votes_to_skip=votes_to_skip)
                room.save()

                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class ListingView(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class CreateListing(APIView):
    serializer_class = CreateListingSerializer

    def post(self, request):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():

            listing = Listing(
                first_name=serializer.data.get('first_name'),
                last_name=serializer.data.get('last_name')
            )
            listing.save()

            return Response(RoomSerializer(listing).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
