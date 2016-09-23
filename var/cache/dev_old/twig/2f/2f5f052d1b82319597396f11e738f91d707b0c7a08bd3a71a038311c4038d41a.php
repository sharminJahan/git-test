<?php

/* @WebProfiler/Collector/exception.html.twig */
class __TwigTemplate_357161c48bf13899d7f6a19eb543bfdbec497e0d734b1b5b1be8720cbe993e32 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/exception.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_a7814943caa6ca5327a35f0bcdffe9d7046171c3400c4b3ed54b692fd01af061 = $this->env->getExtension("native_profiler");
        $__internal_a7814943caa6ca5327a35f0bcdffe9d7046171c3400c4b3ed54b692fd01af061->enter($__internal_a7814943caa6ca5327a35f0bcdffe9d7046171c3400c4b3ed54b692fd01af061_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_a7814943caa6ca5327a35f0bcdffe9d7046171c3400c4b3ed54b692fd01af061->leave($__internal_a7814943caa6ca5327a35f0bcdffe9d7046171c3400c4b3ed54b692fd01af061_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_ed0610f865718af69d7ea54521ea877fd7f988e6602d9019361a2f4cf06f8a9b = $this->env->getExtension("native_profiler");
        $__internal_ed0610f865718af69d7ea54521ea877fd7f988e6602d9019361a2f4cf06f8a9b->enter($__internal_ed0610f865718af69d7ea54521ea877fd7f988e6602d9019361a2f4cf06f8a9b_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    ";
        if ($this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "hasexception", array())) {
            // line 5
            echo "        <style>
            ";
            // line 6
            echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('routing')->getPath("_profiler_exception_css", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
            echo "
        </style>
    ";
        }
        // line 9
        echo "    ";
        $this->displayParentBlock("head", $context, $blocks);
        echo "
";
        
        $__internal_ed0610f865718af69d7ea54521ea877fd7f988e6602d9019361a2f4cf06f8a9b->leave($__internal_ed0610f865718af69d7ea54521ea877fd7f988e6602d9019361a2f4cf06f8a9b_prof);

    }

    // line 12
    public function block_menu($context, array $blocks = array())
    {
        $__internal_b1b829f7253376fc2fa8274e3a15dae2e09b6fb3a4cb41df72d8fae79d95fb5e = $this->env->getExtension("native_profiler");
        $__internal_b1b829f7253376fc2fa8274e3a15dae2e09b6fb3a4cb41df72d8fae79d95fb5e->enter($__internal_b1b829f7253376fc2fa8274e3a15dae2e09b6fb3a4cb41df72d8fae79d95fb5e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 13
        echo "    <span class=\"label ";
        echo (($this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "hasexception", array())) ? ("label-status-error") : ("disabled"));
        echo "\">
        <span class=\"icon\">";
        // line 14
        echo twig_include($this->env, $context, "@WebProfiler/Icon/exception.svg");
        echo "</span>
        <strong>Exception</strong>
        ";
        // line 16
        if ($this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "hasexception", array())) {
            // line 17
            echo "            <span class=\"count\">
                <span>1</span>
            </span>
        ";
        }
        // line 21
        echo "    </span>
";
        
        $__internal_b1b829f7253376fc2fa8274e3a15dae2e09b6fb3a4cb41df72d8fae79d95fb5e->leave($__internal_b1b829f7253376fc2fa8274e3a15dae2e09b6fb3a4cb41df72d8fae79d95fb5e_prof);

    }

    // line 24
    public function block_panel($context, array $blocks = array())
    {
        $__internal_a0d4f4586cf5f4016e0e261cacb526c9c924d6c5262c27418ae7e941ad4e52d6 = $this->env->getExtension("native_profiler");
        $__internal_a0d4f4586cf5f4016e0e261cacb526c9c924d6c5262c27418ae7e941ad4e52d6->enter($__internal_a0d4f4586cf5f4016e0e261cacb526c9c924d6c5262c27418ae7e941ad4e52d6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 25
        echo "    <h2>Exceptions</h2>

    ";
        // line 27
        if ( !$this->getAttribute((isset($context["collector"]) ? $context["collector"] : $this->getContext($context, "collector")), "hasexception", array())) {
            // line 28
            echo "        <div class=\"empty\">
            <p>No exception was thrown and caught during the request.</p>
        </div>
    ";
        } else {
            // line 32
            echo "        <div class=\"sf-reset\">
            ";
            // line 33
            echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('routing')->getPath("_profiler_exception", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
            echo "
        </div>
    ";
        }
        
        $__internal_a0d4f4586cf5f4016e0e261cacb526c9c924d6c5262c27418ae7e941ad4e52d6->leave($__internal_a0d4f4586cf5f4016e0e261cacb526c9c924d6c5262c27418ae7e941ad4e52d6_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/exception.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  117 => 33,  114 => 32,  108 => 28,  106 => 27,  102 => 25,  96 => 24,  88 => 21,  82 => 17,  80 => 16,  75 => 14,  70 => 13,  64 => 12,  54 => 9,  48 => 6,  45 => 5,  42 => 4,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@WebProfiler/Profiler/layout.html.twig' %}*/
/* */
/* {% block head %}*/
/*     {% if collector.hasexception %}*/
/*         <style>*/
/*             {{ render(path('_profiler_exception_css', { token: token })) }}*/
/*         </style>*/
/*     {% endif %}*/
/*     {{ parent() }}*/
/* {% endblock %}*/
/* */
/* {% block menu %}*/
/*     <span class="label {{ collector.hasexception ? 'label-status-error' : 'disabled' }}">*/
/*         <span class="icon">{{ include('@WebProfiler/Icon/exception.svg') }}</span>*/
/*         <strong>Exception</strong>*/
/*         {% if collector.hasexception %}*/
/*             <span class="count">*/
/*                 <span>1</span>*/
/*             </span>*/
/*         {% endif %}*/
/*     </span>*/
/* {% endblock %}*/
/* */
/* {% block panel %}*/
/*     <h2>Exceptions</h2>*/
/* */
/*     {% if not collector.hasexception %}*/
/*         <div class="empty">*/
/*             <p>No exception was thrown and caught during the request.</p>*/
/*         </div>*/
/*     {% else %}*/
/*         <div class="sf-reset">*/
/*             {{ render(path('_profiler_exception', { token: token })) }}*/
/*         </div>*/
/*     {% endif %}*/
/* {% endblock %}*/
/* */
