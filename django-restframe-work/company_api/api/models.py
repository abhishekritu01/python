from turtle import position
from django.db import models

# Create your models here.

# company model
class Company(models.Model):
   company_id = models.AutoField(primary_key = True)
   name = models.CharField(max_length = 100)
   location = models.CharField(max_length = 100)
   about = models.TextField()
   type = models.CharField(max_length = 100 , default = 'private', choices = [('IT', 'IT'), ('Non-IT', 'Non-IT'), ('private', 'private'), ('public', 'public')])
   add_data = models.DateTimeField(auto_now_add = True)
   active = models.BooleanField(default = True)
   
   def __str__(self):
      return self.name + ' - ' + self.location + ' - ' + self.type



##################################Employee model
class Employee(models.Model):
   employee_id = models.AutoField(primary_key = True)
   name = models.CharField(max_length = 100)
   email = models.EmailField(max_length = 100)
   phone = models.CharField(max_length = 15)
   about = models.TextField()
   company = models.ForeignKey(Company, on_delete = models.CASCADE)
   position = models.CharField(max_length =50 , default = 'employee', choices =[('employee', 'employee'), 
                                                                                 ('manager', 'manager'), 
                                                                                 ('director', 'director'), 
                                                                                 ('ceo', 'ceo'),
                                                                                 ('software engineer', 'software engineer'),
                                                                                 ('software developer', 'software developer'),
                                                                                 ])
   
   def __str__(self):
      return self.name + ' - ' + self.company.name + ' - ' + self.position 
   
   
# staf model
class Staff(models.Model):
      staff_id = models.AutoField(primary_key = True)
      staff_image = models.ImageField(upload_to = 'staff_images/', null = True, blank = True)
      name = models.CharField(max_length = 100)
      email = models.EmailField(max_length = 100)
      phone = models.CharField(max_length = 15)
      about = models.TextField()
      company = models.ForeignKey(Company, on_delete = models.CASCADE)

      def __str__(self):
         return self.name + ' - ' + self.company.name 



class internStudent(models.Model):
   intern_id = models.AutoField(primary_key=True)
   name = models.CharField(max_length=100)
   email = models.EmailField(max_length=100)
   phone = models.CharField(max_length=15)
   about = models.TextField()
   company = models.ForeignKey(Company, on_delete=models.CASCADE)
   
   def __str__(self):
      return self.name + ' - ' + self.company.name + ' - ' + self.phone