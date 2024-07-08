from django.http import HttpResponse


def home_page(request):
    # sed json response
    return HttpResponse('{"message": "Hello, World!"}', content_type='application/json')