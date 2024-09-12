
# create serializers.py file in api folder and add the following code

from dataclasses import fields
from rest_framework import serializers

from .models import Company , Employee , Staff, internStudent


class CompanySerializer(serializers.HyperlinkedModelSerializer):   
    company_id = serializers.IntegerField(read_only=True) 
    class Meta:
        model = Company
        # fields = ('company_id', 'name', 'location', 'about', 'type', 'add_date', 'active')
        fields = '__all__'  # this will include all the fields of the model
        # extra_kwargs = {
        #     'url': {'view_name': 'company-detail', 'lookup_field': 'company_id'}
        # }
        
        

class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    employee_id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Employee
        fields = '__all__'
        # extra_kwargs = {
        #     'url': {'view_name': 'employee-detail', 'lookup_field': 'employee_id'}
        # }        
        
        

class StaffSerializer(serializers.HyperlinkedModelSerializer):
    staff_id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Staff
        fields = '__all__'
      
        
        
        
class internStudentSerializer(serializers.HyperlinkedModelSerializer):
    intern_id = serializers.IntegerField(read_only=True)
    class Meta:
        model = internStudent
        fields = '__all__'
      