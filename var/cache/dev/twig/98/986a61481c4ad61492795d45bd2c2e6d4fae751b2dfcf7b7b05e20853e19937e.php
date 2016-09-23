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
        $__internal_948697c2a11810cfb891e4d1eca10e17424ff178b7cc2b5005b421048c1567ba = $this->env->getExtension("native_profiler");
        $__internal_948697c2a11810cfb891e4d1eca10e17424ff178b7cc2b5005b421048c1567ba->enter($__internal_948697c2a11810cfb891e4d1eca10e17424ff178b7cc2b5005b421048c1567ba_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_948697c2a11810cfb891e4d1eca10e17424ff178b7cc2b5005b421048c1567ba->leave($__internal_948697c2a11810cfb891e4d1eca10e17424ff178b7cc2b5005b421048c1567ba_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_2c2d34db68e1e663c7cd0bf6bb856218db2e7de4570742a78617a892d1a99fdb = $this->env->getExtension("native_profiler");
        $__internal_2c2d34db68e1e663c7cd0bf6bb856218db2e7de4570742a78617a892d1a99fdb->enter($__internal_2c2d34db68e1e663c7cd0bf6bb856218db2e7de4570742a78617a892d1a99fdb_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_2c2d34db68e1e663c7cd0bf6bb856218db2e7de4570742a78617a892d1a99fdb->leave($__internal_2c2d34db68e1e663c7cd0bf6bb856218db2e7de4570742a78617a892d1a99fdb_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_140c7b3698a514641b4af69022bebc479c95ad52f58a9ff407bec3701cff99fb = $this->env->getExtension("native_profiler");
        $__internal_140c7b3698a514641b4af69022bebc479c95ad52f58a9ff407bec3701cff99fb->enter($__internal_140c7b3698a514641b4af69022bebc479c95ad52f58a9ff407bec3701cff99fb_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_140c7b3698a514641b4af69022bebc479c95ad52f58a9ff407bec3701cff99fb->leave($__internal_140c7b3698a514641b4af69022bebc479c95ad52f58a9ff407bec3701cff99fb_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_75cc0d0300543ab83e6a09966bd493fefa85a5520fa58181a621fd269f8f6ed2 = $this->env->getExtension("native_profiler");
        $__internal_75cc0d0300543ab83e6a09966bd493fefa85a5520fa58181a621fd269f8f6ed2->enter($__internal_75cc0d0300543ab83e6a09966bd493fefa85a5520fa58181a621fd269f8f6ed2_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('routing')->getPath("_profiler_router", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_75cc0d0300543ab83e6a09966bd493fefa85a5520fa58181a621fd269f8f6ed2->leave($__internal_75cc0d0300543ab83e6a09966bd493fefa85a5520fa58181a621fd269f8f6ed2_prof);

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
