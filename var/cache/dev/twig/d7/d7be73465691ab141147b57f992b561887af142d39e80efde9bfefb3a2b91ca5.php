<?php

/* employee/show.html.twig */
class __TwigTemplate_9f0a4b41b5cc1636e39b5a4bfa91e40beafdf0363885d5c6190dc544b6ab8238 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "employee/show.html.twig", 1);
        $this->blocks = array(
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_7610f02c85a576146af35ddd5f11e6ae703ef01a534a665a91036bfc68600932 = $this->env->getExtension("native_profiler");
        $__internal_7610f02c85a576146af35ddd5f11e6ae703ef01a534a665a91036bfc68600932->enter($__internal_7610f02c85a576146af35ddd5f11e6ae703ef01a534a665a91036bfc68600932_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "employee/show.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_7610f02c85a576146af35ddd5f11e6ae703ef01a534a665a91036bfc68600932->leave($__internal_7610f02c85a576146af35ddd5f11e6ae703ef01a534a665a91036bfc68600932_prof);

    }

    // line 3
    public function block_body($context, array $blocks = array())
    {
        $__internal_4ad74e12c26deaf3ce9f824f700c30c4cf94b330b053a3aff426062ec5a10ef5 = $this->env->getExtension("native_profiler");
        $__internal_4ad74e12c26deaf3ce9f824f700c30c4cf94b330b053a3aff426062ec5a10ef5->enter($__internal_4ad74e12c26deaf3ce9f824f700c30c4cf94b330b053a3aff426062ec5a10ef5_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 4
        echo "    <h1>Employee</h1>

    <table>
        <tbody>
            <tr>
                <th>Id</th>
                <td>";
        // line 10
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "id", array()), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Attendancemachineemployeeid</th>
                <td>";
        // line 14
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "attendanceMachineEmployeeId", array()), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Employeeid</th>
                <td>";
        // line 18
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "employeeId", array()), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Employeename</th>
                <td>";
        // line 22
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "employeeName", array()), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>";
        // line 26
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "address", array()), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Mobile</th>
                <td>";
        // line 30
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "mobile", array()), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>";
        // line 34
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "phone", array()), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>";
        // line 38
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "email", array()), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Createdat</th>
                <td>";
        // line 42
        if ($this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "createdAt", array())) {
            echo twig_escape_filter($this->env, twig_date_format_filter($this->env, $this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "createdAt", array()), "Y-m-d H:i:s"), "html", null, true);
        }
        echo "</td>
            </tr>
            <tr>
                <th>Updatedat</th>
                <td>";
        // line 46
        if ($this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "updatedAt", array())) {
            echo twig_escape_filter($this->env, twig_date_format_filter($this->env, $this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "updatedAt", array()), "Y-m-d H:i:s"), "html", null, true);
        }
        echo "</td>
            </tr>
        </tbody>
    </table>

    <ul>
        <li>
            <a href=\"";
        // line 53
        echo $this->env->getExtension('routing')->getPath("employee_index");
        echo "\">Back to the list</a>
        </li>
        <li>
            <a href=\"";
        // line 56
        echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("employee_edit", array("id" => $this->getAttribute((isset($context["employee"]) ? $context["employee"] : $this->getContext($context, "employee")), "id", array()))), "html", null, true);
        echo "\">Edit</a>
        </li>
        <li>
            ";
        // line 59
        echo         $this->env->getExtension('form')->renderer->renderBlock((isset($context["delete_form"]) ? $context["delete_form"] : $this->getContext($context, "delete_form")), 'form_start');
        echo "
                <input type=\"submit\" value=\"Delete\">
            ";
        // line 61
        echo         $this->env->getExtension('form')->renderer->renderBlock((isset($context["delete_form"]) ? $context["delete_form"] : $this->getContext($context, "delete_form")), 'form_end');
        echo "
        </li>
    </ul>
";
        
        $__internal_4ad74e12c26deaf3ce9f824f700c30c4cf94b330b053a3aff426062ec5a10ef5->leave($__internal_4ad74e12c26deaf3ce9f824f700c30c4cf94b330b053a3aff426062ec5a10ef5_prof);

    }

    public function getTemplateName()
    {
        return "employee/show.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  142 => 61,  137 => 59,  131 => 56,  125 => 53,  113 => 46,  104 => 42,  97 => 38,  90 => 34,  83 => 30,  76 => 26,  69 => 22,  62 => 18,  55 => 14,  48 => 10,  40 => 4,  34 => 3,  11 => 1,);
    }
}
/* {% extends 'base.html.twig' %}*/
/* */
/* {% block body %}*/
/*     <h1>Employee</h1>*/
/* */
/*     <table>*/
/*         <tbody>*/
/*             <tr>*/
/*                 <th>Id</th>*/
/*                 <td>{{ employee.id }}</td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th>Attendancemachineemployeeid</th>*/
/*                 <td>{{ employee.attendanceMachineEmployeeId }}</td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th>Employeeid</th>*/
/*                 <td>{{ employee.employeeId }}</td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th>Employeename</th>*/
/*                 <td>{{ employee.employeeName }}</td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th>Address</th>*/
/*                 <td>{{ employee.address }}</td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th>Mobile</th>*/
/*                 <td>{{ employee.mobile }}</td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th>Phone</th>*/
/*                 <td>{{ employee.phone }}</td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th>Email</th>*/
/*                 <td>{{ employee.email }}</td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th>Createdat</th>*/
/*                 <td>{% if employee.createdAt %}{{ employee.createdAt|date('Y-m-d H:i:s') }}{% endif %}</td>*/
/*             </tr>*/
/*             <tr>*/
/*                 <th>Updatedat</th>*/
/*                 <td>{% if employee.updatedAt %}{{ employee.updatedAt|date('Y-m-d H:i:s') }}{% endif %}</td>*/
/*             </tr>*/
/*         </tbody>*/
/*     </table>*/
/* */
/*     <ul>*/
/*         <li>*/
/*             <a href="{{ path('employee_index') }}">Back to the list</a>*/
/*         </li>*/
/*         <li>*/
/*             <a href="{{ path('employee_edit', { 'id': employee.id }) }}">Edit</a>*/
/*         </li>*/
/*         <li>*/
/*             {{ form_start(delete_form) }}*/
/*                 <input type="submit" value="Delete">*/
/*             {{ form_end(delete_form) }}*/
/*         </li>*/
/*     </ul>*/
/* {% endblock %}*/
/* */
