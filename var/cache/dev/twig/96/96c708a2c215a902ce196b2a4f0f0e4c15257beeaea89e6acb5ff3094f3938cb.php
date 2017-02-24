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
        $__internal_1fca76a0c8b552d513e6ec7f69af27fc7a38da04929eb82aa81176339f903c25 = $this->env->getExtension("native_profiler");
        $__internal_1fca76a0c8b552d513e6ec7f69af27fc7a38da04929eb82aa81176339f903c25->enter($__internal_1fca76a0c8b552d513e6ec7f69af27fc7a38da04929eb82aa81176339f903c25_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_1fca76a0c8b552d513e6ec7f69af27fc7a38da04929eb82aa81176339f903c25->leave($__internal_1fca76a0c8b552d513e6ec7f69af27fc7a38da04929eb82aa81176339f903c25_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_47e8ece31b1dcb6e4294d6f7fbf79b7404d4d81eb0e08458d768d16cc8de3e5f = $this->env->getExtension("native_profiler");
        $__internal_47e8ece31b1dcb6e4294d6f7fbf79b7404d4d81eb0e08458d768d16cc8de3e5f->enter($__internal_47e8ece31b1dcb6e4294d6f7fbf79b7404d4d81eb0e08458d768d16cc8de3e5f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('request')->generateAbsoluteUrl($this->env->getExtension('asset')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_47e8ece31b1dcb6e4294d6f7fbf79b7404d4d81eb0e08458d768d16cc8de3e5f->leave($__internal_47e8ece31b1dcb6e4294d6f7fbf79b7404d4d81eb0e08458d768d16cc8de3e5f_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_0d6d6f4aec82c2517e4a2f5d5897123038802d0ad89ecd590885e43e808573e6 = $this->env->getExtension("native_profiler");
        $__internal_0d6d6f4aec82c2517e4a2f5d5897123038802d0ad89ecd590885e43e808573e6->enter($__internal_0d6d6f4aec82c2517e4a2f5d5897123038802d0ad89ecd590885e43e808573e6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_0d6d6f4aec82c2517e4a2f5d5897123038802d0ad89ecd590885e43e808573e6->leave($__internal_0d6d6f4aec82c2517e4a2f5d5897123038802d0ad89ecd590885e43e808573e6_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_8e328a34664990df35b4ed3b757dd28acb06281433ca1e731eb45c845f0d6b57 = $this->env->getExtension("native_profiler");
        $__internal_8e328a34664990df35b4ed3b757dd28acb06281433ca1e731eb45c845f0d6b57->enter($__internal_8e328a34664990df35b4ed3b757dd28acb06281433ca1e731eb45c845f0d6b57_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("@Twig/Exception/exception.html.twig", "@Twig/Exception/exception_full.html.twig", 12)->display($context);
        
        $__internal_8e328a34664990df35b4ed3b757dd28acb06281433ca1e731eb45c845f0d6b57->leave($__internal_8e328a34664990df35b4ed3b757dd28acb06281433ca1e731eb45c845f0d6b57_prof);

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
