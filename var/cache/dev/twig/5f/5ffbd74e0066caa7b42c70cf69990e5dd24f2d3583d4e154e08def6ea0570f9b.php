<?php

/* base.html.twig */
class __TwigTemplate_b98984c45b6ee88110798d79f0158b36eedfb9262dfa1d56179ff60ce8dde11a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_b093cbeacc88df7d0c42cc4df1c4eeebd5a35f14c0866fe485f2249754c3d9d5 = $this->env->getExtension("native_profiler");
        $__internal_b093cbeacc88df7d0c42cc4df1c4eeebd5a35f14c0866fe485f2249754c3d9d5->enter($__internal_b093cbeacc88df7d0c42cc4df1c4eeebd5a35f14c0866fe485f2249754c3d9d5_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\" />
        <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        ";
        // line 6
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 7
        echo "        <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
    </head>
    <body>
        ";
        // line 10
        $this->displayBlock('body', $context, $blocks);
        // line 11
        echo "        ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 12
        echo "    </body>
</html>
";
        
        $__internal_b093cbeacc88df7d0c42cc4df1c4eeebd5a35f14c0866fe485f2249754c3d9d5->leave($__internal_b093cbeacc88df7d0c42cc4df1c4eeebd5a35f14c0866fe485f2249754c3d9d5_prof);

    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        $__internal_e2a8072698c597c1c299b5ded219f7aac67d3914dd6114f7ece1bc9d9e669ca5 = $this->env->getExtension("native_profiler");
        $__internal_e2a8072698c597c1c299b5ded219f7aac67d3914dd6114f7ece1bc9d9e669ca5->enter($__internal_e2a8072698c597c1c299b5ded219f7aac67d3914dd6114f7ece1bc9d9e669ca5_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Welcome!";
        
        $__internal_e2a8072698c597c1c299b5ded219f7aac67d3914dd6114f7ece1bc9d9e669ca5->leave($__internal_e2a8072698c597c1c299b5ded219f7aac67d3914dd6114f7ece1bc9d9e669ca5_prof);

    }

    // line 6
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_8cb75e60fdd5dcb259d0387e6934c3a8398234fe12f38e8de450b6a8b8897c8a = $this->env->getExtension("native_profiler");
        $__internal_8cb75e60fdd5dcb259d0387e6934c3a8398234fe12f38e8de450b6a8b8897c8a->enter($__internal_8cb75e60fdd5dcb259d0387e6934c3a8398234fe12f38e8de450b6a8b8897c8a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        
        $__internal_8cb75e60fdd5dcb259d0387e6934c3a8398234fe12f38e8de450b6a8b8897c8a->leave($__internal_8cb75e60fdd5dcb259d0387e6934c3a8398234fe12f38e8de450b6a8b8897c8a_prof);

    }

    // line 10
    public function block_body($context, array $blocks = array())
    {
        $__internal_50644123eb4685c53a4c6a8361cc1793ffc2941efe723da7a596e1d375cf3d52 = $this->env->getExtension("native_profiler");
        $__internal_50644123eb4685c53a4c6a8361cc1793ffc2941efe723da7a596e1d375cf3d52->enter($__internal_50644123eb4685c53a4c6a8361cc1793ffc2941efe723da7a596e1d375cf3d52_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_50644123eb4685c53a4c6a8361cc1793ffc2941efe723da7a596e1d375cf3d52->leave($__internal_50644123eb4685c53a4c6a8361cc1793ffc2941efe723da7a596e1d375cf3d52_prof);

    }

    // line 11
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_fd16e0c32050314eee3ee87e4d1d8ffd0222393c34b36c1adb941598d76c3b3a = $this->env->getExtension("native_profiler");
        $__internal_fd16e0c32050314eee3ee87e4d1d8ffd0222393c34b36c1adb941598d76c3b3a->enter($__internal_fd16e0c32050314eee3ee87e4d1d8ffd0222393c34b36c1adb941598d76c3b3a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        
        $__internal_fd16e0c32050314eee3ee87e4d1d8ffd0222393c34b36c1adb941598d76c3b3a->leave($__internal_fd16e0c32050314eee3ee87e4d1d8ffd0222393c34b36c1adb941598d76c3b3a_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  93 => 11,  82 => 10,  71 => 6,  59 => 5,  50 => 12,  47 => 11,  45 => 10,  38 => 7,  36 => 6,  32 => 5,  26 => 1,);
    }
}
/* <!DOCTYPE html>*/
/* <html>*/
/*     <head>*/
/*         <meta charset="UTF-8" />*/
/*         <title>{% block title %}Welcome!{% endblock %}</title>*/
/*         {% block stylesheets %}{% endblock %}*/
/*         <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />*/
/*     </head>*/
/*     <body>*/
/*         {% block body %}{% endblock %}*/
/*         {% block javascripts %}{% endblock %}*/
/*     </body>*/
/* </html>*/
/* */
