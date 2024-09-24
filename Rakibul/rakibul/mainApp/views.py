from django.shortcuts import render
from .models import ProjectImage

# Create your views here.
def main(request):
    images = ProjectImage.objects.all()  # Get all project images
    return render(request, 'index.html', {'images': images})

def About(request):
    return render(request, "About.html")


