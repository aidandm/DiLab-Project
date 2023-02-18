from django.shortcuts import render

def my_view(request):
    data = {'foo': 'bar'}
    return render(request, 'my_template.html', {'data': data})