<?php

/* @Twig/Exception/exception_full.html.twig */
class __TwigTemplate_413047bc667d932b1424eee7d6559ab1ff40138adf7575015cdb635050954159 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@Twig/layout.html.twig", "@Twig/Exception/exception_full.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'title' => array($this, 'block_title'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@Twig/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_2bcf674c63f8136afc61b2d71a4eef84732b6ff1b3b6f63da96a81e797756621 = $this->env->getExtension("native_profiler");
        $__internal_2bcf674c63f8136afc61b2d71a4eef84732b6ff1b3b6f63da96a81e797756621->enter($__internal_2bcf674c63f8136afc61b2d71a4eef84732b6ff1b3b6f63da96a81e797756621_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_2bcf674c63f8136afc61b2d71a4eef84732b6ff1b3b6f63da96a81e797756621->leave($__internal_2bcf674c63f8136afc61b2d71a4eef84732b6ff1b3b6f63da96a81e797756621_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_2f458de9b824c44bc8e5a2e0728ba1c524bd577e55f487f3e7de073334b09de3 = $this->env->getExtension("native_profiler");
        $__internal_2f458de9b824c44bc8e5a2e0728ba1c524bd577e55f487f3e7de073334b09de3->enter($__internal_2f458de9b824c44bc8e5a2e0728ba1c524bd577e55f487f3e7de073334b09de3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('request')->generateAbsoluteUrl($this->env->getExtension('asset')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_2f458de9b824c44bc8e5a2e0728ba1c524bd577e55f487f3e7de073334b09de3->leave($__internal_2f458de9b824c44bc8e5a2e0728ba1c524bd577e55f487f3e7de073334b09de3_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_b639ea100262e8bc1f72224968e8a8795f25384e8ad8eaef49eb137096ad2cb1 = $this->env->getExtension("native_profiler");
        $__internal_b639ea100262e8bc1f72224968e8a8795f25384e8ad8eaef49eb137096ad2cb1->enter($__internal_b639ea100262e8bc1f72224968e8a8795f25384e8ad8eaef49eb137096ad2cb1_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_b639ea100262e8bc1f72224968e8a8795f25384e8ad8eaef49eb137096ad2cb1->leave($__internal_b639ea100262e8bc1f72224968e8a8795f25384e8ad8eaef49eb137096ad2cb1_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_49ef1b13f8b7eafd3b3802615ccb18ebf751ab15d6b016221a297ad281c756c4 = $this->env->getExtension("native_profiler");
        $__internal_49ef1b13f8b7eafd3b3802615ccb18ebf751ab15d6b016221a297ad281c756c4->enter($__internal_49ef1b13f8b7eafd3b3802615ccb18ebf751ab15d6b016221a297ad281c756c4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("@Twig/Exception/exception.html.twig", "@Twig/Exception/exception_full.html.twig", 12)->display($context);
        
        $__internal_49ef1b13f8b7eafd3b3802615ccb18ebf751ab15d6b016221a297ad281c756c4->leave($__internal_49ef1b13f8b7eafd3b3802615ccb18ebf751ab15d6b016221a297ad281c756c4_prof);

    }

    public function getTemplateName()
    {
        return "@Twig/Exception/exception_full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 12,  72 => 11,  58 => 8,  52 => 7,  42 => 4,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@Twig/layout.html.twig' %}*/
/* */
/* {% block head %}*/
/*     <link href="{{ absolute_url(asset('bundles/framework/css/exception.css')) }}" rel="stylesheet" type="text/css" media="all" />*/
/* {% endblock %}*/
/* */
/* {% block title %}*/
/*     {{ exception.message }} ({{ status_code }} {{ status_text }})*/
/* {% endblock %}*/
/* */
/* {% block body %}*/
/*     {% include '@Twig/Exception/exception.html.twig' %}*/
/* {% endblock %}*/
/* */
