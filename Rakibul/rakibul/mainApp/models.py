from django.db import models

# Create your models here.
class ProjectImage(models.Model):
    title = models.CharField(max_length=100)  # Optional: If you want to store image titles
    image = models.ImageField(upload_to='images/')  # This will store images in the 'media/projects/' folder

    def __str__(self):
        return self.title