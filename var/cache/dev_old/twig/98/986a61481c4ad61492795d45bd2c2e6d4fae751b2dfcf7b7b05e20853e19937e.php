<?php

/* @WebProfiler/Collector/router.html.twig */
class __TwigTemplate_57779c885da76012e83197272fe386fc2191c4993337e87ddc7879ffdfe19e24 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/router.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
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
        $__internal_372e76a40aa1e4ec8aac9db3e11ea44068ab0f4375be2342d96edb48c6679938 = $this->env->getExtension("native_profiler");
        $__internal_372e76a40aa1e4ec8aac9db3e11ea44068ab0f4375be2342d96edb48c6679938->enter($__internal_372e76a40aa1e4ec8aac9db3e11ea44068ab0f4375be2342d96edb48c6679938_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_372e76a40aa1e4ec8aac9db3e11ea44068ab0f4375be2342d96edb48c6679938->leave($__internal_372e76a40aa1e4ec8aac9db3e11ea44068ab0f4375be2342d96edb48c6679938_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_d71a41007c50f6afba5674361ddf18d86003aabed02dd2b657a318b2a5c40fc7 = $this->env->getExtension("native_profiler");
        $__internal_d71a41007c50f6afba5674361ddf18d86003aabed02dd2b657a318b2a5c40fc7->enter($__internal_d71a41007c50f6afba5674361ddf18d86003aabed02dd2b657a318b2a5c40fc7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_d71a41007c50f6afba5674361ddf18d86003aabed02dd2b657a318b2a5c40fc7->leave($__internal_d71a41007c50f6afba5674361ddf18d86003aabed02dd2b657a318b2a5c40fc7_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_e0af9b77e45355d6e5985389586ce3d8438504ae1befeabe31ce0750ed15db64 = $this->env->getExtension("native_profiler");
        $__internal_e0af9b77e45355d6e5985389586ce3d8438504ae1befeabe31ce0750ed15db64->enter($__internal_e0af9b77e45355d6e5985389586ce3d8438504ae1befeabe31ce0750ed15db64_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_e0af9b77e45355d6e5985389586ce3d8438504ae1befeabe31ce0750ed15db64->leave($__internal_e0af9b77e45355d6e5985389586ce3d8438504ae1befeabe31ce0750ed15db64_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_5b90d43302afc15e43dba701894842df7b863d84a37273343cb55433d7112a46 = $this->env->getExtension("native_profiler");
        $__internal_5b90d43302afc15e43dba701894842df7b863d84a37273343cb55433d7112a46->enter($__internal_5b90d43302afc15e43dba701894842df7b863d84a37273343cb55433d7112a46_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('routing')->getPath("_profiler_router", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_5b90d43302afc15e43dba701894842df7b863d84a37273343cb55433d7112a46->leave($__internal_5b90d43302afc15e43dba701894842df7b863d84a37273343cb55433d7112a46_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/router.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 13,  67 => 12,  56 => 7,  53 => 6,  47 => 5,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@WebProfiler/Profiler/layout.html.twig' %}*/
/* */
/* {% block toolbar %}{% endblock %}*/
/* */
/* {% block menu %}*/
/* <span class="label">*/
/*     <span class="icon">{{ include('@WebProfiler/Icon/router.svg') }}</span>*/
/*     <strong>Routing</strong>*/
/* </span>*/
/* {% endblock %}*/
/* */
/* {% block panel %}*/
/*     {{ render(path('_profiler_router', { token: token })) }}*/
/* {% endblock %}*/
/* */
