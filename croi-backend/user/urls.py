# Django
from django.urls import path, include
# DRF
from rest_framework.routers import DefaultRouter

# Views
from user.views.session_manager_view import BlacklistTokenUpdateView, MyTokenObtainPairView
from user.views.user_juridic_view import UserJuridicViewSet
from user.views.user_natural_view import UserNaturalViewSet
from user.views.special_user_view import SpecialUserViewSet
from user.views.custom_user_view import CustomUserViewSet

router = DefaultRouter()
router.register(r'user_juridic', UserJuridicViewSet, basename='user_juridic')
router.register(r'user_natural', UserNaturalViewSet, basename='user_natural')
router.register(r'special_user', SpecialUserViewSet, basename='special_user')
router.register(r'custom_user', CustomUserViewSet, basename='custom_user')

urlpatterns = [
    path('signout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist'),
    path('api/token/', MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),  # Get Token - SignIn
    path('', include(router.urls))
]
