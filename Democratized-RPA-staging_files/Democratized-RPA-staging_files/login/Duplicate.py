# import fitz # PyMuPDF
import io
import shutil
from PIL import Image
import os,shutil


def fitz_extract():
	data3 = r'C:\Users\shrey\Downloads\Template data filled\New folder' 
	os.mkdir(data3)
	# for data in os.listdir(r'C:\Users\shrey\Downloads\Fwd__HRC1623414\1'):
	# 	data2 = r'C:\Users\shrey\Downloads\Fwd__HRC1623414\1\%s'%data

	# 	#shutil.move(data2,data3)
	# return "s"
#fitz_extract()

def fitz_extract():
	pdf_file = fitz.open(r"C:\Users\shrey\Downloads\Template data filled\E&C Report.pdf")
	for page_index in range(len(pdf_file)):
	    page = pdf_file[page_index]
	    image_list = page.getImageList()
	    for image_index, img in enumerate(page.getImageList(), start=1):
	        xref = img[0]
	        base_image = pdf_file.extractImage(xref)
	        image_bytes = base_image["image"]
	        image_ext = base_image["ext"]
	        image = Image.open(io.BytesIO(image_bytes))
	        image.save(open(f"image{page_index+1}_{image_index}.{image_ext}", "wb"))

# print(fitz_extract())
