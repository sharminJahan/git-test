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
        $__internal_60f1c81db6e37708f987dfb449a686852c018aadcb72208322613c4d8828cfc9 = $this->env->getExtension("native_profiler");
        $__internal_60f1c81db6e37708f987dfb449a686852c018aadcb72208322613c4d8828cfc9->enter($__internal_60f1c81db6e37708f987dfb449a686852c018aadcb72208322613c4d8828cfc9_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

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
        
        $__internal_60f1c81db6e37708f987dfb449a686852c018aadcb72208322613c4d8828cfc9->leave($__internal_60f1c81db6e37708f987dfb449a686852c018aadcb72208322613c4d8828cfc9_prof);

    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        $__internal_924e0b8becc639c813e961bf51ce87292d291b08fa13d1605997725282037b52 = $this->env->getExtension("native_profiler");
        $__internal_924e0b8becc639c813e961bf51ce87292d291b08fa13d1605997725282037b52->enter($__internal_924e0b8becc639c813e961bf51ce87292d291b08fa13d1605997725282037b52_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Welcome!";
        
        $__internal_924e0b8becc639c813e961bf51ce87292d291b08fa13d1605997725282037b52->leave($__internal_924e0b8becc639c813e961bf51ce87292d291b08fa13d1605997725282037b52_prof);

    }

    // line 6
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_3f80d567cf24ca4f5909872dfbf64f2a7811c165c4251510b9605dab5e66e752 = $this->env->getExtension("native_profiler");
        $__internal_3f80d567cf24ca4f5909872dfbf64f2a7811c165c4251510b9605dab5e66e752->enter($__internal_3f80d567cf24ca4f5909872dfbf64f2a7811c165c4251510b9605dab5e66e752_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        
        $__internal_3f80d567cf24ca4f5909872dfbf64f2a7811c165c4251510b9605dab5e66e752->leave($__internal_3f80d567cf24ca4f5909872dfbf64f2a7811c165c4251510b9605dab5e66e752_prof);

    }

    // line 10
    public function block_body($context, array $blocks = array())
    {
        $__internal_6e682f4fe0deba6a6cdef8215e6bda666b36d2c6e620a26c0e93e7185e1c1e7d = $this->env->getExtension("native_profiler");
        $__internal_6e682f4fe0deba6a6cdef8215e6bda666b36d2c6e620a26c0e93e7185e1c1e7d->enter($__internal_6e682f4fe0deba6a6cdef8215e6bda666b36d2c6e620a26c0e93e7185e1c1e7d_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_6e682f4fe0deba6a6cdef8215e6bda666b36d2c6e620a26c0e93e7185e1c1e7d->leave($__internal_6e682f4fe0deba6a6cdef8215e6bda666b36d2c6e620a26c0e93e7185e1c1e7d_prof);

    }

    // line 11
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_c7e4535d22469b8782a59694b40f0c7c30063bad7849aa29cff8f95c0fe30893 = $this->env->getExtension("native_profiler");
        $__internal_c7e4535d22469b8782a59694b40f0c7c30063bad7849aa29cff8f95c0fe30893->enter($__internal_c7e4535d22469b8782a59694b40f0c7c30063bad7849aa29cff8f95c0fe30893_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        
        $__internal_c7e4535d22469b8782a59694b40f0c7c30063bad7849aa29cff8f95c0fe30893->leave($__internal_c7e4535d22469b8782a59694b40f0c7c30063bad7849aa29cff8f95c0fe30893_prof);

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
