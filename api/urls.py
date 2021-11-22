from django.urls import path
from .views import RoomView, CreateRoomView, ListingView, CreateListing

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('listing', ListingView.as_view()),
    path('create-listing', CreateListing.as_view())
]
