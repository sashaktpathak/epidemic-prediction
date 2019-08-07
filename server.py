from flask import Flask, jsonify, request, render_template
import requests
import json
import wikipedia
import wikipediaapi
import sys
from bs4 import BeautifulSoup
from flask import Response
import dbscan
import random
import csv
app = Flask(__name__)


@app.route('/')
def render_static2():
    return render_template('front.html')


@app.route('/2')
def render_static():
    return render_template('heatmap.html')


@app.route('/getinfo')
def render_static4():
    return render_template('staticPage.html')


@app.route('/3')
def render_static3():
    return render_template('index2.html')


@app.route('/getClusteredData')
def getClusteredData():
    print(dbscan.clusters[0].getPoints()[0].x)
    dst = {}
    for i in range(len(dbscan.clusters)):
        dt = {}
        for j in range(len(dbscan.clusters[i].getPoints())):
            dt[j] = [(dbscan.clusters[i].getPoints()[j].x,
                      dbscan.clusters[i].getPoints()[j].y)]
        dst[i] = dt
    return Response(json.dumps(dst),  mimetype='application/json')


@app.route('/getCentroid')
def getCentroid():
    lst = []
    for cluster in dbscan.clusters:
        x = 0
        y = 0
        cnt = 0
        for p in cluster.getPoints():
            x += p.x
            y += p.y
            cnt += 1
        x = x / cnt
        y = y / cnt
        lst.append((x, y))
    return Response(json.dumps(lst),  mimetype='application/json')


@app.route('/front')
def front():
    return render_template('front.html')


@app.route('/search_disease', methods=['POST'])
def search():

    wiki_wiki = wikipediaapi.Wikipedia('en')

    disease = request.form['search-btn']
    page_py = wiki_wiki.page(disease)

    title = page_py.title
    print("Page - Title: %s" % page_py.title)
    # Page - Title: Python (programming language)

    summary = page_py.summary[0:]
    print("Page - Summary: %s" % page_py.summary[0:60])

    # url=wikipedia.suggest(disease)
    ny = wikipedia.page(disease)
    # type(ny.images[1])
    count = 1
    accept = ['svg', 'jpg', 'png']
    url = "http://iedro.org/wordpress/wp-content/uploads/2012/05/JK2_Legionnaires-Disease.jpg"
    for i in range(0, len(ny.images)):
        # print(ny.images[i][-3:])
        if ny.images[i][-3:] in accept:
            if count == 2:
                # print(ny.images[i])
                url = ny.images[i]
                break
            else:
                count += 1
    print(url)
    dst = []
    dst.append(title)
    dst.append(summary)
    dst.append(url)

    return Response(json.dumps(dst),  mimetype='application/json')


@app.route('/addtocsv', methods=['POST'])
def addtocsv():
    lat = request.form['lat']
    lon = request.form['lon']
    lat = random.randint(-100, 100)
    lon = random.randint(-100, 100)
    disease = request.form['disease']

    myCsvRow = [0, 0, lat, lon, "", "", "", "", "", "",
                "", "", disease, "", "", "", "", "", "", ""]
    with open(r'disease.csv', 'a') as f:
        writer = csv.writer(f)
        writer.writerow(myCsvRow)
        f.close()
    print(lat, lon, "--")
    st = []
    return Response(json.dumps(st),  mimetype='application/json')


if __name__ == '__main__':
    app.run(
        host="0.0.0.0",
        port=int("1239")
    )
