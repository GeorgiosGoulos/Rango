from django.conf.urls import patterns, url
from rango import views

__author__ = 'Ram'

urlpatterns = patterns('', url(r'^$', views.index, name = 'index'),
                           url(r'^about/$', views.about, name='about'),
)