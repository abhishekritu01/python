
from django.db import router
from django.urls import path , include

from api.views import CompanyViewSet , EmployeeViewSet , StaffViewSet , internStudentViewSet
from rest_framework import routers


# router

router = routers.DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'employees', EmployeeViewSet) 
router.register(r'staff', StaffViewSet)
router.register(r'interns', internStudentViewSet)


urlpatterns = [
    path('', include(router.urls))
    
]

# localhost:8000/api/companies/employees