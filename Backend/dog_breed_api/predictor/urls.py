from django.urls import path
from .views import PredictDogBreed

urlpatterns = [
    path('predict/', PredictDogBreed.as_view(), name='predict-dog-breed'),
]
