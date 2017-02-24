<?php

/* @AttendanceReg/Default/index.html.twig */
class __TwigTemplate_3225b5d54e75f095b6d08577680db34bc8c23d89a320e38ba4ea0096c8e64294 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("::base.html.twig", "@AttendanceReg/Default/index.html.twig", 1);
        $this->blocks = array(
            'angular_app' => array($this, 'block_angular_app'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "::base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_68656aafd7b95c5d26044b61f8b665c3f7695e37da1951100bf560c699fdc343 = $this->env->getExtension("native_profiler");
        $__internal_68656aafd7b95c5d26044b61f8b665c3f7695e37da1951100bf560c699fdc343->enter($__internal_68656aafd7b95c5d26044b61f8b665c3f7695e37da1951100bf560c699fdc343_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@AttendanceReg/Default/index.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_68656aafd7b95c5d26044b61f8b665c3f7695e37da1951100bf560c699fdc343->leave($__internal_68656aafd7b95c5d26044b61f8b665c3f7695e37da1951100bf560c699fdc343_prof);

    }

    // line 2
    public function block_angular_app($context, array $blocks = array())
    {
        $__internal_62688f84a518756a204d9981917fbbc25ec4490e64f488194d8cc02c86d99cf2 = $this->env->getExtension("native_profiler");
        $__internal_62688f84a518756a204d9981917fbbc25ec4490e64f488194d8cc02c86d99cf2->enter($__internal_62688f84a518756a204d9981917fbbc25ec4490e64f488194d8cc02c86d99cf2_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "angular_app"));

        echo "ng-app=\"myApp\"";
        
        $__internal_62688f84a518756a204d9981917fbbc25ec4490e64f488194d8cc02c86d99cf2->leave($__internal_62688f84a518756a204d9981917fbbc25ec4490e64f488194d8cc02c86d99cf2_prof);

    }

    // line 3
    public function block_body($context, array $blocks = array())
    {
        $__internal_b3d7187b4368b8ac416067f4db6ec32727e8926b8ce5bd541f60a908d676c727 = $this->env->getExtension("native_profiler");
        $__internal_b3d7187b4368b8ac416067f4db6ec32727e8926b8ce5bd541f60a908d676c727->enter($__internal_b3d7187b4368b8ac416067f4db6ec32727e8926b8ce5bd541f60a908d676c727_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 4
        echo "     <body ng-app=\"myApp\">
 <div class=\"main\" ng-controller=\"MainController\">
{[{title}]}
 </div>
     </body>";
        
        $__internal_b3d7187b4368b8ac416067f4db6ec32727e8926b8ce5bd541f60a908d676c727->leave($__internal_b3d7187b4368b8ac416067f4db6ec32727e8926b8ce5bd541f60a908d676c727_prof);

    }

    // line 9
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_c9043fc6a4496cc02174dba1b9e10682cfd95fb77b1499cee6dc9eeae25c1f7e = $this->env->getExtension("native_profiler");
        $__internal_c9043fc6a4496cc02174dba1b9e10682cfd95fb77b1499cee6dc9eeae25c1f7e->enter($__internal_c9043fc6a4496cc02174dba1b9e10682cfd95fb77b1499cee6dc9eeae25c1f7e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        // line 10
        echo "    <script src=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("assets/js/angular/order_controller.js"), "html", null, true);
        echo "\"></script>
    <script>
        var data = ";
        // line 12
        echo (isset($context["data"]) ? $context["data"] : $this->getContext($context, "data"));
        echo ";
//        console.log(data)
    </script>
";
        
        $__internal_c9043fc6a4496cc02174dba1b9e10682cfd95fb77b1499cee6dc9eeae25c1f7e->leave($__internal_c9043fc6a4496cc02174dba1b9e10682cfd95fb77b1499cee6dc9eeae25c1f7e_prof);

    }

    public function getTemplateName()
    {
        return "@AttendanceReg/Default/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  77 => 12,  71 => 10,  65 => 9,  54 => 4,  48 => 3,  36 => 2,  11 => 1,);
    }
}
/* {% extends '::base.html.twig' %}*/
/* {% block angular_app %}ng-app="myApp"{% endblock %}*/
/*  {% block body %}*/
/*      <body ng-app="myApp">*/
/*  <div class="main" ng-controller="MainController">*/
/* {[{title}]}*/
/*  </div>*/
/*      </body>{% endblock %}*/
/* {% block javascripts %}*/
/*     <script src="{{asset('assets/js/angular/order_controller.js')}}"></script>*/
/*     <script>*/
/*         var data = {{ data|raw }};*/
/* //        console.log(data)*/
/*     </script>*/
/* {% endblock %}*/
/* */
