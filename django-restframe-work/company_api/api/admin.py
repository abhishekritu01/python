from django.contrib import admin

from api.models import Company, Employee , Staff , internStudent


#
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'type')
    search_fields = ('name', 'location',)
     
    
class EmployeeAdmin(admin.ModelAdmin):      
    list_display = ('name', 'company', 'email', 'phone')
    list_filter = ('company',)
    
class StaffAdmin(admin.ModelAdmin):
    list_display = ('name', 'company', 'email', 'phone')
    list_filter = ('company',)    
    
    

# Register your models here.
admin.site.register(Company, CompanyAdmin)
admin.site.register(Employee, EmployeeAdmin)
admin.site.register(Staff, StaffAdmin)
admin.site.register(internStudent)

