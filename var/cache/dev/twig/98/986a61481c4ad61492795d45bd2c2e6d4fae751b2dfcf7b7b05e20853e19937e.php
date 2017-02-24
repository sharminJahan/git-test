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
        $__internal_240999b3c04abe5dcee9aadfd8903f6c07412286d3ae488870d102b12a8606f6 = $this->env->getExtension("native_profiler");
        $__internal_240999b3c04abe5dcee9aadfd8903f6c07412286d3ae488870d102b12a8606f6->enter($__internal_240999b3c04abe5dcee9aadfd8903f6c07412286d3ae488870d102b12a8606f6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_240999b3c04abe5dcee9aadfd8903f6c07412286d3ae488870d102b12a8606f6->leave($__internal_240999b3c04abe5dcee9aadfd8903f6c07412286d3ae488870d102b12a8606f6_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_7fa383c387a10329d9c7995244835cefbb6cff88ea6e794caaf5c5e49c0c1c83 = $this->env->getExtension("native_profiler");
        $__internal_7fa383c387a10329d9c7995244835cefbb6cff88ea6e794caaf5c5e49c0c1c83->enter($__internal_7fa383c387a10329d9c7995244835cefbb6cff88ea6e794caaf5c5e49c0c1c83_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_7fa383c387a10329d9c7995244835cefbb6cff88ea6e794caaf5c5e49c0c1c83->leave($__internal_7fa383c387a10329d9c7995244835cefbb6cff88ea6e794caaf5c5e49c0c1c83_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_4d2c621c4bb7aa422d8da3fa28731d5fbc5703a51e01355b851dbd835fc0deb2 = $this->env->getExtension("native_profiler");
        $__internal_4d2c621c4bb7aa422d8da3fa28731d5fbc5703a51e01355b851dbd835fc0deb2->enter($__internal_4d2c621c4bb7aa422d8da3fa28731d5fbc5703a51e01355b851dbd835fc0deb2_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_4d2c621c4bb7aa422d8da3fa28731d5fbc5703a51e01355b851dbd835fc0deb2->leave($__internal_4d2c621c4bb7aa422d8da3fa28731d5fbc5703a51e01355b851dbd835fc0deb2_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_c6206f91dd8aaaa7978e7a936f083db6545ac1a53d4ec4a09cc450fa3f63ebda = $this->env->getExtension("native_profiler");
        $__internal_c6206f91dd8aaaa7978e7a936f083db6545ac1a53d4ec4a09cc450fa3f63ebda->enter($__internal_c6206f91dd8aaaa7978e7a936f083db6545ac1a53d4ec4a09cc450fa3f63ebda_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('routing')->getPath("_profiler_router", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_c6206f91dd8aaaa7978e7a936f083db6545ac1a53d4ec4a09cc450fa3f63ebda->leave($__internal_c6206f91dd8aaaa7978e7a936f083db6545ac1a53d4ec4a09cc450fa3f63ebda_prof);

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
