from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from base64 import b64decode
import datetime

@csrf_exempt
def save_pic(request):
    if request.method == 'POST':
        data_uri = request.POST['p']
        header, encoded = data_uri.split(",", 1)
        data = b64decode(encoded)
        name = "C:/h3/media/images/"+str(datetime.datetime.now()).replace(" ","").replace(".","h").replace(":","s")+".png"
        with open(name, "wb") as f:
            f.write(data)
    return HttpResponse("GOOD!", status=200)



def page(request):
    return render(request, 'files/page.html')
