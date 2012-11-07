



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "z8yID_gX48nG39AI34o8Ruhs-9w:1347447141360";
 
 
 var CS_env = {"profileUrl":["/a/eclipselabs.org/u/105786592170633743873/"],"token":"z8yID_gX48nG39AI34o8Ruhs-9w:1347447141360","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":"eclipselabs.org","assetVersionPath":"http://www.gstatic.com/codesite/ph/5121560014714628542","projectHomeUrl":"/a/eclipselabs.org/p/mobile-web-development-with-phonegap","relativeBaseUrl":"/a/eclipselabs.org","projectName":"mobile-web-development-with-phonegap","loggedInUserEmail":"vovk.petra@gmail.com"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-20478043-1'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>device.js - 
 mobile-web-development-with-phonegap -
 
 
 AppLaud Eclipse plug-in to facilitate Web Developers creating mobile apps - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/5121560014714628542/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/5121560014714628542/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/5121560014714628542/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/5121560014714628542/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>vovk.petra@gmail.com</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/a/eclipselabs.org/u/105786592170633743873/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/a/eclipselabs.org/u/105786592170633743873/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftags%2Fr1.2%2Fcom.mds.apg%2Fresources%2Fphonegap%2FSample%2Fapis%2Fdevice.js" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <link itemprop="url" href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap">
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/">
 
 
 <img src="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/logo?cct=1341553427"
 alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/"><span itemprop="name">mobile-web-development-with-phonegap</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/"><span itemprop="description">AppLaud Eclipse plug-in to facilitate Web Developers creating mobile apps</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/a/eclipselabs.org/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/list">Changes</a></span> &nbsp;
 
 &nbsp;
 
 
 <form action="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/search" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/">tags</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/">r1.2</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/">com.mds.apg</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/">resources</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/">phonegap</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/">Sample</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/">apis</a><span class="sp">/&nbsp;</span>device.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js?edit=1"
 ><img src="http://www.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js?r=151" title="Previous">&lsaquo;r151</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r174</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn174_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn174_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn174_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn174_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn174_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn174_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn174_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn174_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn174_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn174_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn174_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn174_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn174_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn174_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn174_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn174_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn174_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn174_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn174_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn174_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn174_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn174_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn174_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn174_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn174_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn174_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn174_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn174_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn174_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn174_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn174_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn174_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn174_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn174_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn174_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn174_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn174_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn174_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn174_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn174_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn174_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn174_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn174_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn174_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn174_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn174_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn174_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn174_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn174_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn174_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn174_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn174_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn174_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn174_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn174_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn174_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn174_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn174_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn174_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn174_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn174_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn174_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn174_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn174_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn174_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn174_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn174_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn174_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn174_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn174_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn174_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn174_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn174_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn174_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn174_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn174_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn174_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn174_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn174_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn174_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn174_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn174_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn174_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn174_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn174_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn174_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn174_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn174_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn174_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn174_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn174_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn174_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn174_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn174_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn174_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn174_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn174_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn174_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn174_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn174_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn174_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn174_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn174_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn174_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn174_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn174_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn174_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn174_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn174_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn174_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn174_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn174_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn174_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn174_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn174_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn174_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn174_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn174_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn174_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn174_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn174_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn174_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn174_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn174_124"

><td id="124"><a href="#124">124</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn174_1

><td class="source">/* Copyright (c) 2012 Mobile Developer Solutions. All rights reserved.<br></td></tr
><tr
id=sl_svn174_2

><td class="source"> * This software is available under the MIT License:<br></td></tr
><tr
id=sl_svn174_3

><td class="source"> * The MIT License<br></td></tr
><tr
id=sl_svn174_4

><td class="source"> * Permission is hereby granted, free of charge, to any person obtaining a copy of this software <br></td></tr
><tr
id=sl_svn174_5

><td class="source"> * and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, <br></td></tr
><tr
id=sl_svn174_6

><td class="source"> * including without limitation the rights to use, copy, modify, merge, publish, distribute, <br></td></tr
><tr
id=sl_svn174_7

><td class="source"> * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software <br></td></tr
><tr
id=sl_svn174_8

><td class="source"> * is furnished to do so, subject to the following conditions:<br></td></tr
><tr
id=sl_svn174_9

><td class="source"> *<br></td></tr
><tr
id=sl_svn174_10

><td class="source"> * The above copyright notice and this permission notice shall be included in all copies <br></td></tr
><tr
id=sl_svn174_11

><td class="source"> * or substantial portions of the Software.<br></td></tr
><tr
id=sl_svn174_12

><td class="source"> *<br></td></tr
><tr
id=sl_svn174_13

><td class="source"> * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, <br></td></tr
><tr
id=sl_svn174_14

><td class="source"> * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR <br></td></tr
><tr
id=sl_svn174_15

><td class="source"> * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE <br></td></tr
><tr
id=sl_svn174_16

><td class="source"> * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, <br></td></tr
><tr
id=sl_svn174_17

><td class="source"> * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br></td></tr
><tr
id=sl_svn174_18

><td class="source"> */<br></td></tr
><tr
id=sl_svn174_19

><td class="source"><br></td></tr
><tr
id=sl_svn174_20

><td class="source">function onBackbutton() {<br></td></tr
><tr
id=sl_svn174_21

><td class="source">    // the intro div is considered home, so exit if user<br></td></tr
><tr
id=sl_svn174_22

><td class="source">    // wants to go back with button from there<br></td></tr
><tr
id=sl_svn174_23

><td class="source">    if (document.getElementById(&#39;api-intro&#39;).style.display === &#39;block&#39;) {<br></td></tr
><tr
id=sl_svn174_24

><td class="source">        console.log(&quot;Exiting app&quot;);<br></td></tr
><tr
id=sl_svn174_25

><td class="source">        navigator.app.exitApp();<br></td></tr
><tr
id=sl_svn174_26

><td class="source">    } else {    <br></td></tr
><tr
id=sl_svn174_27

><td class="source">        var divs = document.getElementsByClassName(&#39;api-div&#39;);   <br></td></tr
><tr
id=sl_svn174_28

><td class="source">        for(var i=0; i&lt;divs.length; i++) { <br></td></tr
><tr
id=sl_svn174_29

><td class="source">            divs[i].style.display=&#39;none&#39;;<br></td></tr
><tr
id=sl_svn174_30

><td class="source">        }<br></td></tr
><tr
id=sl_svn174_31

><td class="source">        document.getElementById(&#39;api-intro&#39;).style.display = &#39;block&#39;;<br></td></tr
><tr
id=sl_svn174_32

><td class="source">        scroll(0,0);<br></td></tr
><tr
id=sl_svn174_33

><td class="source">    }<br></td></tr
><tr
id=sl_svn174_34

><td class="source">}<br></td></tr
><tr
id=sl_svn174_35

><td class="source">var onDeviceReady = function() {<br></td></tr
><tr
id=sl_svn174_36

><td class="source">    console.log(&quot;deviceready event fired&quot;);<br></td></tr
><tr
id=sl_svn174_37

><td class="source">    // api-device<br></td></tr
><tr
id=sl_svn174_38

><td class="source">    // ***IMPORTANT: access device object only AFTER &quot;deviceready&quot; event    <br></td></tr
><tr
id=sl_svn174_39

><td class="source">    document.getElementById(&quot;name&quot;).innerHTML = device.name;<br></td></tr
><tr
id=sl_svn174_40

><td class="source">    document.getElementById(&quot;pgversion&quot;).innerHTML = device.cordova ? device.cordova : device.phonegap;<br></td></tr
><tr
id=sl_svn174_41

><td class="source">    document.getElementById(&quot;platform&quot;).innerHTML = device.platform;<br></td></tr
><tr
id=sl_svn174_42

><td class="source">    document.getElementById(&quot;uuid&quot;).innerHTML = device.uuid;<br></td></tr
><tr
id=sl_svn174_43

><td class="source">    document.getElementById(&quot;version&quot;).innerHTML = device.version;<br></td></tr
><tr
id=sl_svn174_44

><td class="source">    // screen information  ***Not necessary to wait for deviceready event<br></td></tr
><tr
id=sl_svn174_45

><td class="source">    document.getElementById(&quot;width&quot;).innerHTML = screen.width;<br></td></tr
><tr
id=sl_svn174_46

><td class="source">    document.getElementById(&quot;height&quot;).innerHTML = screen.height;<br></td></tr
><tr
id=sl_svn174_47

><td class="source">    document.getElementById(&quot;availwidth&quot;).innerHTML = screen.availWidth;<br></td></tr
><tr
id=sl_svn174_48

><td class="source">    document.getElementById(&quot;availheight&quot;).innerHTML = screen.availHeight;<br></td></tr
><tr
id=sl_svn174_49

><td class="source">    document.getElementById(&quot;colorDepth&quot;).innerHTML = screen.colorDepth;  <br></td></tr
><tr
id=sl_svn174_50

><td class="source">    <br></td></tr
><tr
id=sl_svn174_51

><td class="source">    // api-events - see events.js for handler implementations<br></td></tr
><tr
id=sl_svn174_52

><td class="source">    // ***IMPORTANT: add event listeners only AFTER &quot;deviceready&quot; event    <br></td></tr
><tr
id=sl_svn174_53

><td class="source">    document.addEventListener(&quot;searchbutton&quot;, onSearchKeyDown, false);   <br></td></tr
><tr
id=sl_svn174_54

><td class="source">    document.addEventListener(&quot;menubutton&quot;, onMenuButtonDown, false);<br></td></tr
><tr
id=sl_svn174_55

><td class="source">    document.addEventListener(&quot;pause&quot;, onEventFired, false);<br></td></tr
><tr
id=sl_svn174_56

><td class="source">    document.addEventListener(&quot;resume&quot;, onEventFired, false);<br></td></tr
><tr
id=sl_svn174_57

><td class="source">    document.addEventListener(&quot;online&quot;, onEventFired, false);<br></td></tr
><tr
id=sl_svn174_58

><td class="source">    document.addEventListener(&quot;offline&quot;, onEventFired, false);<br></td></tr
><tr
id=sl_svn174_59

><td class="source">    // using callback for backbutton event may interfere with expected behavior<br></td></tr
><tr
id=sl_svn174_60

><td class="source">    document.addEventListener(&quot;backbutton&quot;, onBackbutton, false);<br></td></tr
><tr
id=sl_svn174_61

><td class="source">    document.addEventListener(&quot;batterycritical&quot;, onEventFired, false);<br></td></tr
><tr
id=sl_svn174_62

><td class="source">    document.addEventListener(&quot;batterylow&quot;, onEventFired, false);<br></td></tr
><tr
id=sl_svn174_63

><td class="source">    document.addEventListener(&quot;batterystatus&quot;, onEventFired, false);<br></td></tr
><tr
id=sl_svn174_64

><td class="source">    document.addEventListener(&quot;startcallbutton&quot;, onEventFired, false);<br></td></tr
><tr
id=sl_svn174_65

><td class="source">    document.addEventListener(&quot;endcallbutton&quot;, onEventFired, false);<br></td></tr
><tr
id=sl_svn174_66

><td class="source">    document.addEventListener(&quot;volumedownbutton&quot;, onEventFired, false);<br></td></tr
><tr
id=sl_svn174_67

><td class="source">    document.addEventListener(&quot;volumeupbutton&quot;, onEventFired, false);<br></td></tr
><tr
id=sl_svn174_68

><td class="source">   <br></td></tr
><tr
id=sl_svn174_69

><td class="source">    // api-camera  Photo URI<br></td></tr
><tr
id=sl_svn174_70

><td class="source">    pictureSource=navigator.camera.PictureSourceType;<br></td></tr
><tr
id=sl_svn174_71

><td class="source">    destinationType=navigator.camera.DestinationType;<br></td></tr
><tr
id=sl_svn174_72

><td class="source">    <br></td></tr
><tr
id=sl_svn174_73

><td class="source">    // The Samsung Galaxy Tab 10.1 is currently the only device known to<br></td></tr
><tr
id=sl_svn174_74

><td class="source">    // support orientation/change correctly and reliably.<br></td></tr
><tr
id=sl_svn174_75

><td class="source">    if (device.name === &quot;GT-P7510&quot;) {<br></td></tr
><tr
id=sl_svn174_76

><td class="source">        var updateScreen = function() {<br></td></tr
><tr
id=sl_svn174_77

><td class="source">            document.getElementById(&quot;width&quot;).innerHTML = screen.width;<br></td></tr
><tr
id=sl_svn174_78

><td class="source">            document.getElementById(&quot;height&quot;).innerHTML = screen.height;<br></td></tr
><tr
id=sl_svn174_79

><td class="source">            document.getElementById(&quot;availwidth&quot;).innerHTML = screen.availWidth;<br></td></tr
><tr
id=sl_svn174_80

><td class="source">            document.getElementById(&quot;availheight&quot;).innerHTML = screen.availHeight;        <br></td></tr
><tr
id=sl_svn174_81

><td class="source">        };         <br></td></tr
><tr
id=sl_svn174_82

><td class="source">        window.addEventListener(&quot;orientationchange&quot;, function(e){<br></td></tr
><tr
id=sl_svn174_83

><td class="source">            //console.log(&quot;window.orientation: &quot; + window.orientation);<br></td></tr
><tr
id=sl_svn174_84

><td class="source">            updateScreen();<br></td></tr
><tr
id=sl_svn174_85

><td class="source">        }, false);<br></td></tr
><tr
id=sl_svn174_86

><td class="source">    }<br></td></tr
><tr
id=sl_svn174_87

><td class="source">};<br></td></tr
><tr
id=sl_svn174_88

><td class="source"><br></td></tr
><tr
id=sl_svn174_89

><td class="source">function init() {<br></td></tr
><tr
id=sl_svn174_90

><td class="source">    document.addEventListener(&quot;deviceready&quot;, onDeviceReady, true);<br></td></tr
><tr
id=sl_svn174_91

><td class="source"><br></td></tr
><tr
id=sl_svn174_92

><td class="source">    document.getElementById(&#39;api-intro&#39;).style.display = &#39;block&#39;;<br></td></tr
><tr
id=sl_svn174_93

><td class="source">    <br></td></tr
><tr
id=sl_svn174_94

><td class="source">    var showApi = function(e) {<br></td></tr
><tr
id=sl_svn174_95

><td class="source">        var apiId = this.id;<br></td></tr
><tr
id=sl_svn174_96

><td class="source">        var divs = document.getElementsByClassName(&#39;api-div&#39;);   <br></td></tr
><tr
id=sl_svn174_97

><td class="source">        for(var j=0; j&lt;divs.length; j++) { <br></td></tr
><tr
id=sl_svn174_98

><td class="source">            divs[j].style.display=&#39;none&#39;;<br></td></tr
><tr
id=sl_svn174_99

><td class="source">        }<br></td></tr
><tr
id=sl_svn174_100

><td class="source">        var apiEl = document.getElementById(&#39;api-&#39; + apiId);<br></td></tr
><tr
id=sl_svn174_101

><td class="source">        apiEl.style.display = &#39;block&#39;;<br></td></tr
><tr
id=sl_svn174_102

><td class="source">        scroll(0,0);<br></td></tr
><tr
id=sl_svn174_103

><td class="source">    };<br></td></tr
><tr
id=sl_svn174_104

><td class="source">    // add click to each api name / div<br></td></tr
><tr
id=sl_svn174_105

><td class="source">    var apiList = document.getElementById(&#39;sidebar&#39;).getElementsByTagName(&#39;a&#39;);<br></td></tr
><tr
id=sl_svn174_106

><td class="source">    for(var i=0; i&lt; apiList.length; i++) { <br></td></tr
><tr
id=sl_svn174_107

><td class="source">        apiList[i].addEventListener(&#39;click&#39;, showApi, false);<br></td></tr
><tr
id=sl_svn174_108

><td class="source">    }<br></td></tr
><tr
id=sl_svn174_109

><td class="source"><br></td></tr
><tr
id=sl_svn174_110

><td class="source">    var $select = document.getElementById(&#39;subheader&#39;).getElementsByTagName(&#39;select&#39;)[0];<br></td></tr
><tr
id=sl_svn174_111

><td class="source">    if ($select) {<br></td></tr
><tr
id=sl_svn174_112

><td class="source">        $select.addEventListener(&#39;change&#39;, function(e) {<br></td></tr
><tr
id=sl_svn174_113

><td class="source">            var api = this.options[this.selectedIndex].value;<br></td></tr
><tr
id=sl_svn174_114

><td class="source">            //alert(&quot;value: &quot; + api);<br></td></tr
><tr
id=sl_svn174_115

><td class="source">            <br></td></tr
><tr
id=sl_svn174_116

><td class="source">            var divs = document.getElementsByClassName(&#39;api-div&#39;);   <br></td></tr
><tr
id=sl_svn174_117

><td class="source">            for(var j=0; j&lt;divs.length; j++) { <br></td></tr
><tr
id=sl_svn174_118

><td class="source">                divs[j].style.display=&#39;none&#39;;<br></td></tr
><tr
id=sl_svn174_119

><td class="source">            }<br></td></tr
><tr
id=sl_svn174_120

><td class="source">            document.getElementById(&#39;api-&#39; + api).style.display = &#39;block&#39;;<br></td></tr
><tr
id=sl_svn174_121

><td class="source">            <br></td></tr
><tr
id=sl_svn174_122

><td class="source">        }, false);<br></td></tr
><tr
id=sl_svn174_123

><td class="source">    } else { alert(&quot;no select here&quot;); }<br></td></tr
><tr
id=sl_svn174_124

><td class="source">}<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn174_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn174_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?spec=svn174&amp;r=169">r169</a>
 by paul.beusterien
 on Apr 18, 2012
 &nbsp; <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/diff?spec=svn174&r=169&amp;format=side&amp;path=/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js&amp;old_path=/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js&amp;old=151">Diff</a>
 </div>
 <pre>Moving 1.2.9 to main 1.2 branch -<a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=150">r150</a>:168</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=169&spec=svn174';
 var publish_url = '/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=169&spec=svn174#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/tags/r1.2');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/META-INF/MANIFEST.MF');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/META-INF/MANIFEST.MF?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/demo2/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/demo2/index.html?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/ajax-loader.gif');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/ajax-loader.gif?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/ajax-loader.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/ajax-loader.png?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-18-black.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-18-black.png?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-18-white.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-18-white.png?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-36-black.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-36-black.png?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-36-white.png');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-36-white.png?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.css?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.js?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.css?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.js?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.css?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.js?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.min.css');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.min.css?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.min.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.min.js?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/device.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/device.js?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.html?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.js?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/supplements/jquery-1.6.4.min');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/supplements/jquery-1.6.4.min?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/jqm/supplements/jquery-1.7.2.min');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/supplements/jquery-1.7.2.min?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/phonegap-1.4.1.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/phonegap-1.4.1.jar?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/phonegap-1.4.1.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/phonegap-1.4.1.js?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res/xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res/xml?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res/xml/phonegap.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res/xml/phonegap.xml?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res/xml/plugins.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res/xml/plugins.xml?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/cordova-1.5.0.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/cordova-1.5.0.jar?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/cordova-1.5.0.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/cordova-1.5.0.js?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res/xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res/xml?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res/xml/cordova.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res/xml/cordova.xml?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res/xml/plugins.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res/xml/plugins.xml?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/cordova-1.6.1.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/cordova-1.6.1.jar?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/cordova-1.6.1.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/cordova-1.6.1.js?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res/xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res/xml?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res/xml/cordova.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res/xml/cordova.xml?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res/xml/plugins.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res/xml/plugins.xml?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js?r\x3d169\x26spec\x3dsvn174');
 
 var selected_path = '/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js';
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/Sample/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/index.html?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/jar?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/js?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/phonegap/res');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/res?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/phonegapdemo-w-sencha.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/phonegapdemo-w-sencha.js?r\x3d169\x26spec\x3dsvn174');
 
 
 changed_paths.push('/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/AndroidPgProjectCreationPage.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/AndroidPgProjectCreationPage.java?r\x3d169\x26spec\x3dsvn174');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2?r=169&amp;spec=svn174"
 
 >/tags/r1.2</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/META-INF/MANIFEST.MF?r=169&amp;spec=svn174"
 
 >...com.mds.apg/META-INF/MANIFEST.MF</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/demo2/index.html?r=169&amp;spec=svn174"
 
 >...g/resources/jqm/demo2/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/ajax-loader.gif?r=169&amp;spec=svn174"
 
 >...ry.mobile/images/ajax-loader.gif</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/ajax-loader.png?r=169&amp;spec=svn174"
 
 >...ry.mobile/images/ajax-loader.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-18-black.png?r=169&amp;spec=svn174"
 
 >...mobile/images/icons-18-black.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-18-white.png?r=169&amp;spec=svn174"
 
 >...mobile/images/icons-18-white.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-36-black.png?r=169&amp;spec=svn174"
 
 >...mobile/images/icons-36-black.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/images/icons-36-white.png?r=169&amp;spec=svn174"
 
 >...mobile/images/icons-36-white.png</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.css?r=169&amp;spec=svn174"
 
 >...y.mobile/jquery.mobile-1.0.1.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.js?r=169&amp;spec=svn174"
 
 >...ry.mobile/jquery.mobile-1.0.1.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.css?r=169&amp;spec=svn174"
 
 >...bile/jquery.mobile-1.0.1.min.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.0.1.min.js?r=169&amp;spec=svn174"
 
 >...obile/jquery.mobile-1.0.1.min.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.css?r=169&amp;spec=svn174"
 
 >...y.mobile/jquery.mobile-1.1.0.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.js?r=169&amp;spec=svn174"
 
 >...ry.mobile/jquery.mobile-1.1.0.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.min.css?r=169&amp;spec=svn174"
 
 >...bile/jquery.mobile-1.1.0.min.css</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/jquery.mobile/jquery.mobile-1.1.0.min.js?r=169&amp;spec=svn174"
 
 >...obile/jquery.mobile-1.1.0.min.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/apis/device.js?r=169&amp;spec=svn174"
 
 >...m/phonegapExample/apis/device.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.html?r=169&amp;spec=svn174"
 
 >...s/jqm/phonegapExample/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/phonegapExample/index.js?r=169&amp;spec=svn174"
 
 >...ces/jqm/phonegapExample/index.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/supplements/jquery-1.6.4.min?r=169&amp;spec=svn174"
 
 >...jqm/supplements/jquery-1.6.4.min</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/jqm/supplements/jquery-1.7.2.min?r=169&amp;spec=svn174"
 
 >...jqm/supplements/jquery-1.7.2.min</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1?r=169&amp;spec=svn174"
 
 >...mds.apg/resources/phonegap/1.4.1</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/phonegap-1.4.1.jar?r=169&amp;spec=svn174"
 
 >...honegap/1.4.1/phonegap-1.4.1.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/phonegap-1.4.1.js?r=169&amp;spec=svn174"
 
 >...phonegap/1.4.1/phonegap-1.4.1.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res?r=169&amp;spec=svn174"
 
 >...apg/resources/phonegap/1.4.1/res</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res/xml?r=169&amp;spec=svn174"
 
 >...resources/phonegap/1.4.1/res/xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res/xml/phonegap.xml?r=169&amp;spec=svn174"
 
 >...negap/1.4.1/res/xml/phonegap.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.4.1/res/xml/plugins.xml?r=169&amp;spec=svn174"
 
 >...onegap/1.4.1/res/xml/plugins.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0?r=169&amp;spec=svn174"
 
 >...mds.apg/resources/phonegap/1.5.0</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/cordova-1.5.0.jar?r=169&amp;spec=svn174"
 
 >...phonegap/1.5.0/cordova-1.5.0.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/cordova-1.5.0.js?r=169&amp;spec=svn174"
 
 >.../phonegap/1.5.0/cordova-1.5.0.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res?r=169&amp;spec=svn174"
 
 >...apg/resources/phonegap/1.5.0/res</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res/xml?r=169&amp;spec=svn174"
 
 >...resources/phonegap/1.5.0/res/xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res/xml/cordova.xml?r=169&amp;spec=svn174"
 
 >...onegap/1.5.0/res/xml/cordova.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.5.0/res/xml/plugins.xml?r=169&amp;spec=svn174"
 
 >...onegap/1.5.0/res/xml/plugins.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1?r=169&amp;spec=svn174"
 
 >...mds.apg/resources/phonegap/1.6.1</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/cordova-1.6.1.jar?r=169&amp;spec=svn174"
 
 >...phonegap/1.6.1/cordova-1.6.1.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/cordova-1.6.1.js?r=169&amp;spec=svn174"
 
 >.../phonegap/1.6.1/cordova-1.6.1.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res?r=169&amp;spec=svn174"
 
 >...apg/resources/phonegap/1.6.1/res</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res/xml?r=169&amp;spec=svn174"
 
 >...resources/phonegap/1.6.1/res/xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res/xml/cordova.xml?r=169&amp;spec=svn174"
 
 >...onegap/1.6.1/res/xml/cordova.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/1.6.1/res/xml/plugins.xml?r=169&amp;spec=svn174"
 
 >...onegap/1.6.1/res/xml/plugins.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js?r=169&amp;spec=svn174"
 selected="selected"
 >...s/phonegap/Sample/apis/device.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/Sample/index.html?r=169&amp;spec=svn174"
 
 >...urces/phonegap/Sample/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/jar?r=169&amp;spec=svn174"
 
 >...m.mds.apg/resources/phonegap/jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/js?r=169&amp;spec=svn174"
 
 >...om.mds.apg/resources/phonegap/js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/phonegap/res?r=169&amp;spec=svn174"
 
 >...m.mds.apg/resources/phonegap/res</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/resources/sencha/phonegapExample/phonegapdemo-w-sencha.js?r=169&amp;spec=svn174"
 
 >...Example/phonegapdemo-w-sencha.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/tags/r1.2/com.mds.apg/src/com/mds/apg/wizards/AndroidPgProjectCreationPage.java?r=169&amp;spec=svn174"
 
 >...ndroidPgProjectCreationPage.java</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?spec=svn174&r=151">r151</a>
 by paul.beusterien
 on Feb 7, 2012
 &nbsp; <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/diff?spec=svn174&r=151&amp;format=side&amp;path=/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js&amp;old_path=/trunk/com.mds.apg/resources/phonegap/Sample/apis/device.js&amp;old=148">Diff</a>
 <br>
 <pre class="ifOpened">Moving 1.2.7 to main 1.2 branch
-<a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=132">r132</a>:150</pre>
 </div>
 
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?spec=svn174&r=148">r148</a>
 by paul.beusterien
 on Feb 6, 2012
 &nbsp; <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/diff?spec=svn174&r=148&amp;format=side&amp;path=/trunk/com.mds.apg/resources/phonegap/Sample/apis/device.js&amp;old_path=/trunk/com.mds.apg/resources/phonegap/Sample/apis/device.js&amp;old=144">Diff</a>
 <br>
 <pre class="ifOpened">Fix incorrect initializer for
mIsCordova. Support screen.height and
screen.width on orientation change on
tablets. Consolidate index.js into
device.js</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?spec=svn174&r=144">r144</a>
 by paul.beusterien
 on Feb 5, 2012
 &nbsp; <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/diff?spec=svn174&r=144&amp;format=side&amp;path=/trunk/com.mds.apg/resources/phonegap/Sample/apis/device.js&amp;old_path=/trunk/com.mds.apg/resources/phonegap/Sample/apis/device.js&amp;old=">Diff</a>
 <br>
 <pre class="ifOpened">Fuller PhoneGap API in PhoneGap
example and jQuery Mobile example.
Rounded app icon.</pre>
 </div>
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/list?path=/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js&start=169">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 6132 bytes,
 124 lines</div>
 
 <div><a href="//svn.codespot.com/a/eclipselabs.org/mobile-web-development-with-phonegap/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:mime-type</dt>
 <dd>text/plain</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/5121560014714628542/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/5121560014714628542/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/5121560014714628542/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/5121560014714628542/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn174': '/tags/r1.2/com.mds.apg/resources/phonegap/Sample/apis/device.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":["/a/eclipselabs.org/u/105786592170633743873/"],"token":"z8yID_gX48nG39AI34o8Ruhs-9w:1347447141360","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":"eclipselabs.org","assetVersionPath":"http://www.gstatic.com/codesite/ph/5121560014714628542","projectHomeUrl":"/a/eclipselabs.org/p/mobile-web-development-with-phonegap","relativeBaseUrl":"/a/eclipselabs.org","projectName":"mobile-web-development-with-phonegap","loggedInUserEmail":"vovk.petra@gmail.com"}, '', 'svn174', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/5121560014714628542/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/5121560014714628542/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

