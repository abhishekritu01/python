from rest_framework import viewsets
from .models import Company, Employee
from .serializers import CompanySerializer, EmployeeSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status




class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    
    # http://127.0.0.1:8000/api/v1/companies/4/employees/
    @action(detail=True, methods=['get'])
    def employees(self, request, pk=None):
        try:
            company = Company.objects.get(pk=pk)
            emps = Employee.objects.filter(company=company)
            emps_serializer = EmployeeSerializer(emps, many=True, context={'request': request}) 
            return Response(emps_serializer.data, status=status.HTTP_200_OK)
        
        except Company.DoesNotExist:
            return Response({'message': 'Company does not exist'}, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as e:
            # Log the exception (e.g., using Django's logging framework)
            return Response({'message': 'An error occurred'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
