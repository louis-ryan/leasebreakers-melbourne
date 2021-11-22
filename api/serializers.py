from rest_framework import serializers
from .models import Room, Listing


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = (
            'id',
            'code',
            'host',
            'first_name',
            'last_name',
            'guest_can_pause',
            'votes_to_skip',
            'created_at'
        )


class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = (
            'first_name',
            'last_name',
            'guest_can_pause',
            'votes_to_skip'
        )


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = (
            'id',
            'first_name',
            'last_name',
            'created_at'
        )


class CreateListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = (
            'first_name',
            'last_name'
        )