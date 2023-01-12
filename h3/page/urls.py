from django.urls import path
from .views import save_pic,page

urlpatterns = [
    path('page/', page, name="images"),
    path('save_pic/', save_pic, name='save_pic'),
]