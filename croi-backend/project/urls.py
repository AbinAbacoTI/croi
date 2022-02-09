from django.urls import path, include

from .views.viewsAction import *
from .views.viewsBond import *
from .views.viewsCategory import *
from .views.viewsInvestment import *
from .views.viewsLoans import *
from .views.viewsProject import *
from .views.viewsRequestForm import *
from .views.viewsProject_List import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'action_view', ActionViewSet, basename='action_view')
router.register(r'bond_view', BondViewSet, basename='bond_view')
router.register(r'category_view', CategoryViewSet, basename='category_view')
router.register(r'investment_view', InvestmentViewSet, basename='investment_view')
router.register(r'loans_view', LoansViewSet, basename='loans_view')
router.register(r'project_view', ProjectViewSet, basename='project_view')
router.register(r'request_view', RequestFormViewSet, basename='request_view')
router.register(r'project_view_list', Project_List_ViewSet, basename='project_view_list')

urlpatterns = [
    #path('category-view/', views.CategoryViewSet.as_view()),
    path('', include(router.urls))
]
