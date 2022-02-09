# Django
from posixpath import basename
from django.urls import path, include
# DRF
from rest_framework.routers import DefaultRouter

# Views
from order.views.my_action_view import MyActionViewSet
from order.views.my_bond_view import MyBondViewSet
from order.views.my_investment_view import MyInvestmentViewSet
from order.views.order_view import OrderViewSet
from order.views.my_loans_view import MyLoansViewSet

router = DefaultRouter()
router.register(r'my_action', MyActionViewSet, basename='my_action')
router.register(r'my_bond', MyBondViewSet, basename='my_bond')
router.register(r'my_investment', MyInvestmentViewSet, basename='my_investment')
router.register(r'order', OrderViewSet, basename='order')
router.register(r'my_loans', MyLoansViewSet, basename='my_loans')

urlpatterns = [
    # path('my_Action/<int:pk>', ActionDetail.as_view(),
    #      name='actiondetail'),
    # path('api/token/', MyTokenObtainPairView.as_view(),
    #      name='token_obtain_pair'),  # Get Token - SignIn
    path('', include(router.urls))
]