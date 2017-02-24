<?php

/* ::base.html.twig */
class __TwigTemplate_b98984c45b6ee88110798d79f0158b36eedfb9262dfa1d56179ff60ce8dde11a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'angular_app' => array($this, 'block_angular_app'),
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'container_class' => array($this, 'block_container_class'),
            'flashMessage' => array($this, 'block_flashMessage'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_36ec5ce8bf6460358fbbf82fc100d5b04ae366b70dd230420cece752ce831a78 = $this->env->getExtension("native_profiler");
        $__internal_36ec5ce8bf6460358fbbf82fc100d5b04ae366b70dd230420cece752ce831a78->enter($__internal_36ec5ce8bf6460358fbbf82fc100d5b04ae366b70dd230420cece752ce831a78_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "::base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\" ";
        // line 2
        $this->displayBlock('angular_app', $context, $blocks);
        echo ">
<head>
    <meta charset=\"utf-8\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
    <title>Biznet | ";
        // line 8
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
    ";
        // line 9
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 10
        echo "</head>
<body role=\"document\">
<!-- navbar start -->

<!-- main content start -->
<div class=\"";
        // line 15
        $this->displayBlock('container_class', $context, $blocks);
        echo "\" role=\"main\">
    ";
        // line 16
        $this->displayBlock('flashMessage', $context, $blocks);
        // line 42
        echo "    ";
        $this->displayBlock('body', $context, $blocks);
        // line 43
        echo "</div>
<script src=\"";
        // line 44
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("assets/js/angular/bower_components/angular/angular.js"), "html", null, true);
        echo "\"></script>
<script src=\"";
        // line 45
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("assets/js/angular/bower_components/underscore/underscore.js"), "html", null, true);
        echo "\"></script>
<script src=\"";
        // line 46
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("assets/js/angular/bower_components/angular-resource/angular-resource.js"), "html", null, true);
        echo "\"></script>
<script src=\"";
        // line 47
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("assets/js/angular/bower_components/angular-route/angular-route.js"), "html", null, true);
        echo "\"></script>
<script src=\"";
        // line 48
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("assets/js/angular/bower_components/angular-object-table/build/object-table.js"), "html", null, true);
        echo "\"></script>
<script src=\"";
        // line 49
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("assets/js/angular/bower_components/angular-pdf/dist/angular-pdf.js"), "html", null, true);
        echo "\"></script>
<script src=\"";
        // line 50
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("assets/js/angular/bower_components/html2canvas/build/html2canvas.js"), "html", null, true);
        echo "\"></script>
<script src=\"";
        // line 51
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("assets/js/angular/bower_components/angular-ui-tree/dist/angular-ui-tree.js"), "html", null, true);
        echo "\"></script>
<script src=\"";
        // line 52
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("assets/js/angular/bower_components/angular-bootstrap/ui-bootstrap-tpls.js"), "html", null, true);
        echo "\"></script>
<script src=\"";
        // line 53
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("assets/js/angular/bower_components/angularUtils-pagination/dirPagination.js"), "html", null, true);
        echo "\"></script>
";
        // line 54
        $this->displayBlock('javascripts', $context, $blocks);
        // line 55
        echo "</body>
</html>";
        
        $__internal_36ec5ce8bf6460358fbbf82fc100d5b04ae366b70dd230420cece752ce831a78->leave($__internal_36ec5ce8bf6460358fbbf82fc100d5b04ae366b70dd230420cece752ce831a78_prof);

    }

    // line 2
    public function block_angular_app($context, array $blocks = array())
    {
        $__internal_6005d36a81e20f21f1bd6b8335c582c26afe9d5c3981aee74dc44d28f830d2b8 = $this->env->getExtension("native_profiler");
        $__internal_6005d36a81e20f21f1bd6b8335c582c26afe9d5c3981aee74dc44d28f830d2b8->enter($__internal_6005d36a81e20f21f1bd6b8335c582c26afe9d5c3981aee74dc44d28f830d2b8_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "angular_app"));

        
        $__internal_6005d36a81e20f21f1bd6b8335c582c26afe9d5c3981aee74dc44d28f830d2b8->leave($__internal_6005d36a81e20f21f1bd6b8335c582c26afe9d5c3981aee74dc44d28f830d2b8_prof);

    }

    // line 8
    public function block_title($context, array $blocks = array())
    {
        $__internal_eb00ff3902b85fa9ada9f31cb377c48265c783299893e9ee59bb0d9553fc18da = $this->env->getExtension("native_profiler");
        $__internal_eb00ff3902b85fa9ada9f31cb377c48265c783299893e9ee59bb0d9553fc18da->enter($__internal_eb00ff3902b85fa9ada9f31cb377c48265c783299893e9ee59bb0d9553fc18da_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        
        $__internal_eb00ff3902b85fa9ada9f31cb377c48265c783299893e9ee59bb0d9553fc18da->leave($__internal_eb00ff3902b85fa9ada9f31cb377c48265c783299893e9ee59bb0d9553fc18da_prof);

    }

    // line 9
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_f346502293afcb99265f4aaf9804ec1f1f924dc96bc5ec9550add236b9741ab4 = $this->env->getExtension("native_profiler");
        $__internal_f346502293afcb99265f4aaf9804ec1f1f924dc96bc5ec9550add236b9741ab4->enter($__internal_f346502293afcb99265f4aaf9804ec1f1f924dc96bc5ec9550add236b9741ab4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        
        $__internal_f346502293afcb99265f4aaf9804ec1f1f924dc96bc5ec9550add236b9741ab4->leave($__internal_f346502293afcb99265f4aaf9804ec1f1f924dc96bc5ec9550add236b9741ab4_prof);

    }

    // line 15
    public function block_container_class($context, array $blocks = array())
    {
        $__internal_fe7c797a23a49da635ee9e3d4031df77a9170c7b2b8319cb90e5a846190ce1b7 = $this->env->getExtension("native_profiler");
        $__internal_fe7c797a23a49da635ee9e3d4031df77a9170c7b2b8319cb90e5a846190ce1b7->enter($__internal_fe7c797a23a49da635ee9e3d4031df77a9170c7b2b8319cb90e5a846190ce1b7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "container_class"));

        echo "container-fluid";
        
        $__internal_fe7c797a23a49da635ee9e3d4031df77a9170c7b2b8319cb90e5a846190ce1b7->leave($__internal_fe7c797a23a49da635ee9e3d4031df77a9170c7b2b8319cb90e5a846190ce1b7_prof);

    }

    // line 16
    public function block_flashMessage($context, array $blocks = array())
    {
        $__internal_b53e6a200c82fbd25fbe698eaa03b5f4d0f0705637621ff0bf6941ca032a9658 = $this->env->getExtension("native_profiler");
        $__internal_b53e6a200c82fbd25fbe698eaa03b5f4d0f0705637621ff0bf6941ca032a9658->enter($__internal_b53e6a200c82fbd25fbe698eaa03b5f4d0f0705637621ff0bf6941ca032a9658_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "flashMessage"));

        // line 17
        echo "        ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["app"]) ? $context["app"] : $this->getContext($context, "app")), "session", array()), "flashbag", array()), "get", array(0 => "error"), "method"));
        foreach ($context['_seq'] as $context["_key"] => $context["flashMessage"]) {
            // line 18
            echo "            <div class=\"alert alert-danger alert-dismissable\">
                <button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>
                <p>";
            // line 20
            echo twig_escape_filter($this->env, $context["flashMessage"], "html", null, true);
            echo "</p>
            </div>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['flashMessage'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 23
        echo "        ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["app"]) ? $context["app"] : $this->getContext($context, "app")), "session", array()), "flashbag", array()), "get", array(0 => "success"), "method"));
        foreach ($context['_seq'] as $context["_key"] => $context["flashMessage"]) {
            // line 24
            echo "            <div class=\"alert alert-success alert-dismissable\">
                <button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>
                <p>";
            // line 26
            echo twig_escape_filter($this->env, $context["flashMessage"], "html", null, true);
            echo "</p>
            </div>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['flashMessage'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 29
        echo "        ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["app"]) ? $context["app"] : $this->getContext($context, "app")), "session", array()), "flashbag", array()), "get", array(0 => "warning"), "method"));
        foreach ($context['_seq'] as $context["_key"] => $context["flashMessage"]) {
            // line 30
            echo "            <div class=\"alert alert-warning alert-dismissable\">
                <button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>
                <p>";
            // line 32
            echo twig_escape_filter($this->env, $context["flashMessage"], "html", null, true);
            echo "</p>
            </div>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['flashMessage'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 35
        echo "        ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute((isset($context["app"]) ? $context["app"] : $this->getContext($context, "app")), "session", array()), "flashbag", array()), "get", array(0 => "info"), "method"));
        foreach ($context['_seq'] as $context["_key"] => $context["flashMessage"]) {
            // line 36
            echo "            <div class=\"alert alert-info\">
                <button aria-hidden=\"true\" data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>
                <p>";
            // line 38
            echo twig_escape_filter($this->env, $context["flashMessage"], "html", null, true);
            echo "</p>
            </div>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['flashMessage'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 41
        echo "    ";
        
        $__internal_b53e6a200c82fbd25fbe698eaa03b5f4d0f0705637621ff0bf6941ca032a9658->leave($__internal_b53e6a200c82fbd25fbe698eaa03b5f4d0f0705637621ff0bf6941ca032a9658_prof);

    }

    // line 42
    public function block_body($context, array $blocks = array())
    {
        $__internal_73d68270fdacf15d8a0c06f6736d3c0f4c8ef354b14212ba28053e5191d53ad9 = $this->env->getExtension("native_profiler");
        $__internal_73d68270fdacf15d8a0c06f6736d3c0f4c8ef354b14212ba28053e5191d53ad9->enter($__internal_73d68270fdacf15d8a0c06f6736d3c0f4c8ef354b14212ba28053e5191d53ad9_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_73d68270fdacf15d8a0c06f6736d3c0f4c8ef354b14212ba28053e5191d53ad9->leave($__internal_73d68270fdacf15d8a0c06f6736d3c0f4c8ef354b14212ba28053e5191d53ad9_prof);

    }

    // line 54
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_c171fbf6580b7b6ba3ce989ed4b4fe2cd87e6cdee0d8d4c203c69e09e00dc0fe = $this->env->getExtension("native_profiler");
        $__internal_c171fbf6580b7b6ba3ce989ed4b4fe2cd87e6cdee0d8d4c203c69e09e00dc0fe->enter($__internal_c171fbf6580b7b6ba3ce989ed4b4fe2cd87e6cdee0d8d4c203c69e09e00dc0fe_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        
        $__internal_c171fbf6580b7b6ba3ce989ed4b4fe2cd87e6cdee0d8d4c203c69e09e00dc0fe->leave($__internal_c171fbf6580b7b6ba3ce989ed4b4fe2cd87e6cdee0d8d4c203c69e09e00dc0fe_prof);

    }

    public function getTemplateName()
    {
        return "::base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  260 => 54,  249 => 42,  242 => 41,  233 => 38,  229 => 36,  224 => 35,  215 => 32,  211 => 30,  206 => 29,  197 => 26,  193 => 24,  188 => 23,  179 => 20,  175 => 18,  170 => 17,  164 => 16,  152 => 15,  141 => 9,  130 => 8,  119 => 2,  111 => 55,  109 => 54,  105 => 53,  101 => 52,  97 => 51,  93 => 50,  89 => 49,  85 => 48,  81 => 47,  77 => 46,  73 => 45,  69 => 44,  66 => 43,  63 => 42,  61 => 16,  57 => 15,  50 => 10,  48 => 9,  44 => 8,  40 => 7,  32 => 2,  29 => 1,);
    }
}
/* <!DOCTYPE html>*/
/* <html lang="en" {% block angular_app %}{% endblock %}>*/
/* <head>*/
/*     <meta charset="utf-8">*/
/*     <meta http-equiv="X-UA-Compatible" content="IE=edge">*/
/*     <meta name="viewport" content="width=device-width, initial-scale=1">*/
/*     <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />*/
/*     <title>Biznet | {% block title %}{% endblock %}</title>*/
/*     {% block stylesheets %}{% endblock %}*/
/* </head>*/
/* <body role="document">*/
/* <!-- navbar start -->*/
/* */
/* <!-- main content start -->*/
/* <div class="{% block container_class %}container-fluid{% endblock container_class %}" role="main">*/
/*     {% block flashMessage %}*/
/*         {% for flashMessage in app.session.flashbag.get('error') %}*/
/*             <div class="alert alert-danger alert-dismissable">*/
/*                 <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>*/
/*                 <p>{{ flashMessage }}</p>*/
/*             </div>*/
/*         {% endfor %}*/
/*         {% for flashMessage in app.session.flashbag.get('success') %}*/
/*             <div class="alert alert-success alert-dismissable">*/
/*                 <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>*/
/*                 <p>{{ flashMessage }}</p>*/
/*             </div>*/
/*         {% endfor %}*/
/*         {% for flashMessage in app.session.flashbag.get('warning') %}*/
/*             <div class="alert alert-warning alert-dismissable">*/
/*                 <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>*/
/*                 <p>{{ flashMessage }}</p>*/
/*             </div>*/
/*         {% endfor %}*/
/*         {% for flashMessage in app.session.flashbag.get('info') %}*/
/*             <div class="alert alert-info">*/
/*                 <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>*/
/*                 <p>{{ flashMessage }}</p>*/
/*             </div>*/
/*         {% endfor %}*/
/*     {% endblock %}*/
/*     {% block body %}{% endblock %}*/
/* </div>*/
/* <script src="{{asset('assets/js/angular/bower_components/angular/angular.js')}}"></script>*/
/* <script src="{{asset('assets/js/angular/bower_components/underscore/underscore.js')}}"></script>*/
/* <script src="{{asset('assets/js/angular/bower_components/angular-resource/angular-resource.js')}}"></script>*/
/* <script src="{{asset('assets/js/angular/bower_components/angular-route/angular-route.js')}}"></script>*/
/* <script src="{{asset('assets/js/angular/bower_components/angular-object-table/build/object-table.js')}}"></script>*/
/* <script src="{{asset('assets/js/angular/bower_components/angular-pdf/dist/angular-pdf.js')}}"></script>*/
/* <script src="{{asset('assets/js/angular/bower_components/html2canvas/build/html2canvas.js')}}"></script>*/
/* <script src="{{asset('assets/js/angular/bower_components/angular-ui-tree/dist/angular-ui-tree.js')}}"></script>*/
/* <script src="{{asset('assets/js/angular/bower_components/angular-bootstrap/ui-bootstrap-tpls.js')}}"></script>*/
/* <script src="{{asset('assets/js/angular/bower_components/angularUtils-pagination/dirPagination.js')}}"></script>*/
/* {% block javascripts %}{% endblock %}*/
/* </body>*/
/* </html>*/
