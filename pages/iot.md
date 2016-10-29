---
title: IoT
permalink: "/iot/"
position: 15
page-title: IoT
layout: default
description: Creating software to connect your smart IoT hardware to your customers
hero-title: Smart software for your smart hardware
hero-img: warehouse-dim.jpg
---

{% include orange-hero.html hero_img=page.hero-img %}

<section class="section bg-white" >
    <div class="container">
        <div class="row">          
          <div class="col-md-8 col-md-offset-2 align-center">
            <h2>Take your smart hardware ideas to market with our help</h2>
            <p>
            We help forward-thinking manufacturers stand out from their competitors by developing compelling mobile and cloud software experiences. We work with them to devise effective solutions and take them to market quickly.
            </p>
          </div>
        </div>
      </div>
</section>  

<section class="section" >
    <div class="container">
        <div class="row">          


        <div class="col-md-4">
          <blockquote>Working with a new Smart Home startup, we took on the challenge of developing a mobile experience that would empower consumers to control their home in sophisticated ways, but with a simple and self-explanatory user experience.</blockquote>
          <p>Tobin Harris<br/>Founder &amp; CTO, Pocketworks</p>
        </div>

        {% assign post = site.posts | where:"url", "/case-study/connecting-energenie-smarthome-to-nest-thermostats/"  | first %}
        {% assign post.cols = 6 %}
        {% include grid-card.html item=post %}

        {% assign post = site.posts | where:"url", "/case-study/turning-lights-on-across-the-uk/"  | first %}
        {% assign post.cols = 5 %}
        {% include grid-card.html item=post %}  



        </div>
      </div>
</section>   

<section class="section bg-white" >
    <div class="container">
        <div class="row">     
        <div class="col-md-6">
          <img src="https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=800&refresh=2592001&url=https://pocketworks-website.s3.amazonaws.com/energenie-socket-board.jpg" class="img-responsive" alt="IoT Hardware">
        </div>     
          <div class="col-md-6 ">
            <h2>Mobile, cloud and big-data</h2>
            <p>
            Pocketworks is a mobile and cloud software specialist offering advice and experience to companies looking to launch their own IoT products. We're helping our clients take end-to-end solutions to market quickly using our experience in solutions design, cloud software development, data analysis, integration and mobile applications.
            </p>
          </div>
        </div>
      </div>
</section>

<section class="section" >
    <div class="container">
        <div class="row">     
          <div class="col-md-12 align-center">
            <img src="http://freevectorlogo.net/wp-content/uploads/2011/08/bluetooth-logo-vector-400x400.png" alt="Bluetooth" style="width: 200px">

            <img src="http://www.thecrowgroup.com/sites/crow/_media/mediabank/257_mb_file_ca344.png" alt="Bluetooth" style="width: 200px">

            <img src="https://hackadaycom.files.wordpress.com/2016/04/arduinopi2.png?w=800" alt="Bluetooth" style="width: 300px">

            <img src="http://www.unixstickers.com/image/cache/data/stickers/rails/rails-new.sh-600x600.png" alt="Bluetooth" style="width: 200px">

            <img src="http://static1.squarespace.com/static/530e4682e4b0984e87ed0fee/53108d27e4b02695bd9aa345/5509b9d2e4b085c947d9d194/1427285010555/?format=1000w" alt="Bluetooth" style="width: 200px">

            <img src="https://iotee.files.wordpress.com/2015/03/z-wave_logo.png?w=1000" alt="Bluetooth" style="width: 200px">


          </div>
        </div>
      </div>
</section>

<section class="section bg-white">
    <div class="container">
    <div class="row">     
      <div class="col-md-12 align-center">
        <h2>How we can help you</h2>
      </div>
    </div>
        <div class="row">     
          <div class="col-md-6">
            <ul>
              <li>Advice on possibilities and strategy</li>
              <li>High level software architecture</li>
              <li>Mobile application design and development</li>
              <li>Cloud software design and development</li>
              <li>High volume data storage and reports</li>
              <li>Selecting the right hosting solution</li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul>
              <li>Integration with ERP and 3rd parties</li>
              <li>Connecting hardware to cloud and mobile</li>
              <li>Hardware prototyping with Raspberry Pi</li>
              <li>Gateway and Hub software development</li>
              <li>User testing and user experience design</li>
              <li>24/7/365 operational support with SLA</li>
            </ul>
          </div>
        </div>
    </div>
</section>
