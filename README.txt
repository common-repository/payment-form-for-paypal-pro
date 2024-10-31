=== Payment Form for PayPal Pro ===
Contributors: codepeople
Donate link: https://wordpress.dwbooster.com/forms/paypal-payment-pro-form
Tags: paypal,paypal pro,paypal advanced,pro,accept
Requires at least: 3.0.5
Tested up to: 6.6
Stable tag: 1.1.72
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Payment Form for PayPal Pro for accepting credit cards directly into your website without navigating to a PayPal page.

== Description ==

This plugin is for integrating **PayPal Pro** to accept credit cards directly into your website without navigating to a PayPal hosted payment page. 

The PayPal integration available in this plugin **requires a PayPal Pro account**. 

If you aren't sure if you have a **PayPal Pro account** or if you are looking for a classic **PayPal Standard** integration then use the [CP Contact Form with PayPal](http://wordpress.org/extend/plugins/cp-contact-form-with-paypal/) plugin. 

You can check the differences betwen **PayPal Pro** and **PayPal Standard** at https://www.paypal.com/webapps/mpp/compare-business-products

**Special note:** This plugin has been developed by an Official PayPal Partner.

With **Payment Form for PayPal Pro** you can insert a form into a WordPress website and use it to process credit card payments **directly into your website** without navigating to an external payment page.

This plugin uses the PayPal Pro API to process the credit cards. The credit card related data is used only to process the payment through the payment API, it isn't stored in the website for keeping it secure.

Once the user has filled the form fields and clicks the submit button the payment is processed and the posted data (excluding the credit card related information) is saved into the WordPress database. The website administrator (the email indicated from the settings) will receive an email with the form data and the user will receive a confirmation/thank you email.

= Features: =

* Supports PayPal Pro to accept payments directly into your website without navigating to PayPal
* Supports many contact forms into the same WP website, each one with its own prices and settings.
* You can customize the notification email details, including from address, subject and content.
* Includes optional captcha verification.
* Supports HTML formatted emails (*)
* Can be tested with the PayPal Sandbox
* Exports the submissions to CSV/Excel
* Developer by an [Official PayPal Partner](https://www.paypal-marketing.com/paypal/html/hosted/emarketing/partner/directory/#k=net+factor&n=2000009361343&m=p).

= Proffesional Version Features: =

The following features aren't part of the free version. The following features are present only in the pro version

* Visual form builder: The free version includes the payment form with an email field plus the required PayPal fields. If you need a different form you should opt for the commercial version.
* In the commercial version PayPal Standard is supported in addition to PayPal Pro.

If you are interested in a version with the pro features you can get it here: https://wordpress.dwbooster.com/forms/paypal-payment-pro-form

= Language Support =

The Payment Form for PayPal Pro plugin is compatible with all charsets. The troubleshoot area contains options to change the encoding of the plugin database tables if needed.

Translations are supported through PO/MO files located in the Payment Form for PayPal Pro plugin folder "languages".

The following translations are already included in the plugin:

* Afrikaans (af)
* Albanian (sq)
* Arabic (ar)
* Armenian (hy_AM)
* Azerbaijani (az)
* Basque (eu)
* Belarusian (be_BY)
* Bosnian (bs_BA)
* Bulgarian (bg_BG)
* Catalan (ca)
* Central Kurdish (ckb)
* Chinese (China zh_CN)
* Chinese (Taiwan zh_TW)
* Croatian (hr)
* Czech (cs_CZ)
* Danish (da_DK)
* Dutch (nl_NL)
* Esperanto (eo_EO)
* Estonian (et)
* Finnish (fi)
* French (fr_FR)
* Galician (gl_ES)
* Georgian (ka_GE)
* German (de_DE)
* Greek (el)
* Gujarati (gu_IN)
* Hebrew (he_IL)
* Hindi (hi_IN)
* Hungarian (hu_HU)
* Indian Bengali (bn_IN)
* Indonesian (id_ID)
* Irish (ga_IE)
* Italian (it_IT)
* Japanese (ja)
* Korean (ko_KR)
* Latvian (lv)
* Lithuanian (lt_LT)
* Macedonian (mk_MK)
* Malay (ms_MY)
* Malayalam (ml_IN)
* Maltese (mt_MT)
* Norwegian (nb_NO)
* Persian (fa_IR)
* Polish (pl_PL)
* Portuguese Brazil(pt_BR)
* Portuguese (pt_PT)
* Punjabi (pa_IN)
* Russian (ru_RU)
* Romanian (ro_RO)
* Serbian (sr_RS)
* Slovak (sk_SK)
* Slovene (sl_SI)
* Spanish (es_ES)
* Swedish (sv_SE)
* Tagalog (tl)
* Tamil (ta)
* Thai (th)
* Turkish (tr_TR)
* Ukrainian (uk)
* Vietnamese (vi)

= Updates =

New features has been published in the current Payment Form for PayPal Pro version 1.0.2 based on the feedback received and we would like to thank you all the people that have supported the development, provided feedback and feature requests. The plugin is currently over the 4000 downloads/installations and a new set of updates is already being prepared, any feature requests will be welcome. Thank you!

== Installation ==

To install Payment Form for PayPal Pro, follow these steps:

1.	Download and unzip the Payment Form for PayPal Pro plugin
2.	Upload the entire paypal-payment-pro-form/ directory to the /wp-content/plugins/ directory
3.	Activate the Payment Form for PayPal Pro plugin through the Plugins menu in WordPress
4.	Configure the PayPal contact form settings at the administration menu >> Settings >> Payment Form for PayPal Pro
5.	To insert the PayPal contact form into some content or post use the icon that will appear when editing contents

== Frequently Asked Questions ==

= Q: Where can I find more info about this plugin? =

A: The product's page contains more information:

https://wordpress.dwbooster.com/forms/paypal-payment-pro-form

= Q: Where can I publish the PayPal Pro form with the PayPal button? =

A: You can publish the PayPal contact forms / PayPal button into pages, posts and as a widget in the sidebar.

= Q: I'm not receiving the emails after PayPal payment. =

A: Try first using a "from" email address that belongs to your website domain, this is the most common restriction applied in most hosting services.

If that doesn't work please check if your hosting service requires some specific configuration to send emails from PHP/WordPress websites. The plugin uses the settings specified into the WordPress website to deliver the emails, if your hosting has some specific requirements like a fixed "from" address or a custom "SMTP" server those settings must be configured into the WordPress website.

= Q: Are the forms GDPR compliant? =

A: In all plugin versions you can turn off IP tracking to avoid saving that user info. Full GDPR compliant forms can be built using the commercial versions of the plugin.


== Screenshots ==

1. PayPal Pro Forms List
2. PayPal Pro Form Settings
3. Inserting a PayPal Pro form into a page
4. Sample  

== Changelog ==

= 1.0.1 =
* First stable version released.

= 1.0.2 =
* XSS vulnerability fixed

= 1.0.3 =
* Tested and compatible with WordPress 4.4
* Fixed parameter value in saving settings process.

= 1.0.4 =
* Tested with WordPress 4.5

= 1.0.5 =
* Scripts loaded in a different order for WP 4.5 issues

= 1.0.6 =
* Tested with WP 4.6

= 1.0.8 =
* Fixed bug related to the new WP 4.6 PHPMailer rule

= 1.0.9 =
* Fixed POST encoding

= 1.1.20 =
* Fixed magic quotes issue

= 1.1.21 =
* Fixed IP address DB structure

= 1.1.22 =
* Compatible with WP 4.7

= 1.1.23 =
* Multiple plugin and doc updates

= 1.1.24 =
* Optional review panel

= 1.1.25 =
* Review panel fix

= 1.1.26 =
* Tested and compatible with WP 4.8

= 1.1.27 =
* New visual color pickers for captcha preferences

= 1.1.28 =
* Moved plugin website and links to SSL

= 1.1.29 =
* Compatible with WordPress 4.9

= 1.1.30 =
* Fixed bug in review panel

= 1.1.31 =
* Added CSS and JavaScript customization panel

= 1.1.32 =
* Adjustments to make the form GDPR compliant

= 1.1.33 =
* Changed process to async calls with loading indicator

= 1.1.34 =
* Fixed conflict with autoptimize plugin

= 1.1.35 =
* Fixed captcha reloading issue

= 1.1.36 =
* Easier activation process

= 1.1.37 =
* Optional deactivation feedback

= 1.1.38 =
* Fixed bug in activation process

= 1.1.39 =
* Database creating encoding fix 

= 1.1.40 =
* New responsive payment fields

= 1.1.41 =
* Fixed magic quotes issue

= 1.1.42 =
* Fixed jQuery slim conflict

= 1.1.43 =
* Fixed conflict with third party plugins

= 1.1.44 =
* Form builder header fixes

= 1.1.45 =
* Compatible with WordPress 5.0

= 1.1.46 =
* New Gutemberg block

= 1.1.47 =
* Removed use of CURL

= 1.1.48 =
* Compatible with WordPress 5.1

= 1.1.49 =
* Fixed bug in submission process

= 1.1.50 =
* Fixed conflict with lazy loading feature of Jetpack

= 1.1.51 =
* Misc improvements

= 1.1.52 =
* Compatible with WordPress 5.2

= 1.1.53 =
* Update for compatibility with WordPress 5.2

= 1.1.54 =
* Added new nonces verifications

= 1.1.55 =
* Code improvements

= 1.1.56 =
* Code improvements

= 1.1.57 =
* Fix to captcha image and db encoding

= 1.1.58 =
* Compatible with WordPress 5.3

= 1.1.59 =
* Fixed Javascript minify conflicts

= 1.1.60 =
* Fixed reply-to header encoding

= 1.1.61 =
* WP 5.3 compatibility update

= 1.1.62 =
* Compatible with WordPress 5.4

= 1.1.63 =
* Fixed compatibility issue with cache optimization plugin

= 1.1.64 =
* WordPress editor block update

= 1.1.65 =
* Bug fixes

= 1.1.66 =
* Compatible with WordPress 5.5

= 1.1.67 =
* Compatible with WordPress 5.6

= 1.1.68 =
* Compatible with WordPress 6.0

= 1.1.69 =
* Compatible with WordPress 6.2

= 1.1.70 =
* Compatible with WordPress 6.4

= 1.1.71 =
* Compatible with WordPress 6.5
* credit,cards,card,payment,processing

== Upgrade Notice ==

= 1.1.71 =
* Compatible with WordPress 6.5
* credit,cards,card,payment,processing