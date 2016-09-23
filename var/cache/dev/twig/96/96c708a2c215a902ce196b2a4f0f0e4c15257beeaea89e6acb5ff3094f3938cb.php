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
        $__internal_28bd110039ff8d643636b0ad3354e3f9bdbe3c2f0c64665183c4a01d378c3c6a = $this->env->getExtension("native_profiler");
        $__internal_28bd110039ff8d643636b0ad3354e3f9bdbe3c2f0c64665183c4a01d378c3c6a->enter($__internal_28bd110039ff8d643636b0ad3354e3f9bdbe3c2f0c64665183c4a01d378c3c6a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_28bd110039ff8d643636b0ad3354e3f9bdbe3c2f0c64665183c4a01d378c3c6a->leave($__internal_28bd110039ff8d643636b0ad3354e3f9bdbe3c2f0c64665183c4a01d378c3c6a_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_fff69c02e6a494b47bc462678efdf7821a61b8421a214ba80b3575ee256a3b2b = $this->env->getExtension("native_profiler");
        $__internal_fff69c02e6a494b47bc462678efdf7821a61b8421a214ba80b3575ee256a3b2b->enter($__internal_fff69c02e6a494b47bc462678efdf7821a61b8421a214ba80b3575ee256a3b2b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('request')->generateAbsoluteUrl($this->env->getExtension('asset')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_fff69c02e6a494b47bc462678efdf7821a61b8421a214ba80b3575ee256a3b2b->leave($__internal_fff69c02e6a494b47bc462678efdf7821a61b8421a214ba80b3575ee256a3b2b_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_a90d33497cc6f74bfd79a9c24aef4f11e265d4b4630b2f105093f11144015931 = $this->env->getExtension("native_profiler");
        $__internal_a90d33497cc6f74bfd79a9c24aef4f11e265d4b4630b2f105093f11144015931->enter($__internal_a90d33497cc6f74bfd79a9c24aef4f11e265d4b4630b2f105093f11144015931_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_a90d33497cc6f74bfd79a9c24aef4f11e265d4b4630b2f105093f11144015931->leave($__internal_a90d33497cc6f74bfd79a9c24aef4f11e265d4b4630b2f105093f11144015931_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_3b5a3c330bd40112e45ff9b54ed7a425d2f3cf982708759cdd65b3815c157b5d = $this->env->getExtension("native_profiler");
        $__internal_3b5a3c330bd40112e45ff9b54ed7a425d2f3cf982708759cdd65b3815c157b5d->enter($__internal_3b5a3c330bd40112e45ff9b54ed7a425d2f3cf982708759cdd65b3815c157b5d_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("@Twig/Exception/exception.html.twig", "@Twig/Exception/exception_full.html.twig", 12)->display($context);
        
        $__internal_3b5a3c330bd40112e45ff9b54ed7a425d2f3cf982708759cdd65b3815c157b5d->leave($__internal_3b5a3c330bd40112e45ff9b54ed7a425d2f3cf982708759cdd65b3815c157b5d_prof);

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
