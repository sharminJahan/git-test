<?php

/* employee/index.html.twig */
class __TwigTemplate_fe8b0de5159e7937b167ac8c81a366f6eb143343d73ea3d58001da110011ef10 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "employee/index.html.twig", 1);
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
        $__internal_794942ce971218684237b44f65f44a9b485ba40f14be7813d4ee1f90af55f4f1 = $this->env->getExtension("native_profiler");
        $__internal_794942ce971218684237b44f65f44a9b485ba40f14be7813d4ee1f90af55f4f1->enter($__internal_794942ce971218684237b44f65f44a9b485ba40f14be7813d4ee1f90af55f4f1_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "employee/index.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_794942ce971218684237b44f65f44a9b485ba40f14be7813d4ee1f90af55f4f1->leave($__internal_794942ce971218684237b44f65f44a9b485ba40f14be7813d4ee1f90af55f4f1_prof);

    }

    // line 3
    public function block_body($context, array $blocks = array())
    {
        $__internal_174f488c4e4d731f7da004ec3ab333be0eaec34ca5953ee8355b803dafc1409e = $this->env->getExtension("native_profiler");
        $__internal_174f488c4e4d731f7da004ec3ab333be0eaec34ca5953ee8355b803dafc1409e->enter($__internal_174f488c4e4d731f7da004ec3ab333be0eaec34ca5953ee8355b803dafc1409e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 4
        echo "    <h1>Employee list</h1>

    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Attendancemachineemployeeid</th>
                <th>Employeeid</th>
                <th>Employeename</th>
                <th>Address</th>
                <th>Mobile</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Createdat</th>
                <th>Updatedat</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        ";
        // line 23
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["employees"]) ? $context["employees"] : $this->getContext($context, "employees")));
        foreach ($context['_seq'] as $context["_key"] => $context["employee"]) {
            // line 24
            echo "            <tr>
                <td><a href=\"";
            // line 25
            echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("employee_show", array("id" => $this->getAttribute($context["employee"], "id", array()))), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, $this->getAttribute($context["employee"], "id", array()), "html", null, true);
            echo "</a></td>
                <td>";
            // line 26
            echo twig_escape_filter($this->env, $this->getAttribute($context["employee"], "attendanceMachineEmployeeId", array()), "html", null, true);
            echo "</td>
                <td>";
            // line 27
            echo twig_escape_filter($this->env, $this->getAttribute($context["employee"], "employeeId", array()), "html", null, true);
            echo "</td>
                <td>";
            // line 28
            echo twig_escape_filter($this->env, $this->getAttribute($context["employee"], "employeeName", array()), "html", null, true);
            echo "</td>
                <td>";
            // line 29
            echo twig_escape_filter($this->env, $this->getAttribute($context["employee"], "address", array()), "html", null, true);
            echo "</td>
                <td>";
            // line 30
            echo twig_escape_filter($this->env, $this->getAttribute($context["employee"], "mobile", array()), "html", null, true);
            echo "</td>
                <td>";
            // line 31
            echo twig_escape_filter($this->env, $this->getAttribute($context["employee"], "phone", array()), "html", null, true);
            echo "</td>
                <td>";
            // line 32
            echo twig_escape_filter($this->env, $this->getAttribute($context["employee"], "email", array()), "html", null, true);
            echo "</td>
                <td>";
            // line 33
            if ($this->getAttribute($context["employee"], "createdAt", array())) {
                echo twig_escape_filter($this->env, twig_date_format_filter($this->env, $this->getAttribute($context["employee"], "createdAt", array()), "Y-m-d H:i:s"), "html", null, true);
            }
            echo "</td>
                <td>";
            // line 34
            if ($this->getAttribute($context["employee"], "updatedAt", array())) {
                echo twig_escape_filter($this->env, twig_date_format_filter($this->env, $this->getAttribute($context["employee"], "updatedAt", array()), "Y-m-d H:i:s"), "html", null, true);
            }
            echo "</td>
                <td>
                    <ul>
                        <li>
                            <a href=\"";
            // line 38
            echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("employee_show", array("id" => $this->getAttribute($context["employee"], "id", array()))), "html", null, true);
            echo "\">show</a>
                        </li>
                        <li>
                            <a href=\"";
            // line 41
            echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("employee_edit", array("id" => $this->getAttribute($context["employee"], "id", array()))), "html", null, true);
            echo "\">edit</a>
                        </li>
                    </ul>
                </td>
            </tr>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['employee'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 47
        echo "        </tbody>
    </table>

    <ul>
        <li>
            <a href=\"";
        // line 52
        echo $this->env->getExtension('routing')->getPath("employee_new");
        echo "\">Create a new entry</a>
        </li>
    </ul>
";
        
        $__internal_174f488c4e4d731f7da004ec3ab333be0eaec34ca5953ee8355b803dafc1409e->leave($__internal_174f488c4e4d731f7da004ec3ab333be0eaec34ca5953ee8355b803dafc1409e_prof);

    }

    public function getTemplateName()
    {
        return "employee/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  142 => 52,  135 => 47,  123 => 41,  117 => 38,  108 => 34,  102 => 33,  98 => 32,  94 => 31,  90 => 30,  86 => 29,  82 => 28,  78 => 27,  74 => 26,  68 => 25,  65 => 24,  61 => 23,  40 => 4,  34 => 3,  11 => 1,);
    }
}
/* {% extends 'base.html.twig' %}*/
/* */
/* {% block body %}*/
/*     <h1>Employee list</h1>*/
/* */
/*     <table>*/
/*         <thead>*/
/*             <tr>*/
/*                 <th>Id</th>*/
/*                 <th>Attendancemachineemployeeid</th>*/
/*                 <th>Employeeid</th>*/
/*                 <th>Employeename</th>*/
/*                 <th>Address</th>*/
/*                 <th>Mobile</th>*/
/*                 <th>Phone</th>*/
/*                 <th>Email</th>*/
/*                 <th>Createdat</th>*/
/*                 <th>Updatedat</th>*/
/*                 <th>Actions</th>*/
/*             </tr>*/
/*         </thead>*/
/*         <tbody>*/
/*         {% for employee in employees %}*/
/*             <tr>*/
/*                 <td><a href="{{ path('employee_show', { 'id': employee.id }) }}">{{ employee.id }}</a></td>*/
/*                 <td>{{ employee.attendanceMachineEmployeeId }}</td>*/
/*                 <td>{{ employee.employeeId }}</td>*/
/*                 <td>{{ employee.employeeName }}</td>*/
/*                 <td>{{ employee.address }}</td>*/
/*                 <td>{{ employee.mobile }}</td>*/
/*                 <td>{{ employee.phone }}</td>*/
/*                 <td>{{ employee.email }}</td>*/
/*                 <td>{% if employee.createdAt %}{{ employee.createdAt|date('Y-m-d H:i:s') }}{% endif %}</td>*/
/*                 <td>{% if employee.updatedAt %}{{ employee.updatedAt|date('Y-m-d H:i:s') }}{% endif %}</td>*/
/*                 <td>*/
/*                     <ul>*/
/*                         <li>*/
/*                             <a href="{{ path('employee_show', { 'id': employee.id }) }}">show</a>*/
/*                         </li>*/
/*                         <li>*/
/*                             <a href="{{ path('employee_edit', { 'id': employee.id }) }}">edit</a>*/
/*                         </li>*/
/*                     </ul>*/
/*                 </td>*/
/*             </tr>*/
/*         {% endfor %}*/
/*         </tbody>*/
/*     </table>*/
/* */
/*     <ul>*/
/*         <li>*/
/*             <a href="{{ path('employee_new') }}">Create a new entry</a>*/
/*         </li>*/
/*     </ul>*/
/* {% endblock %}*/
/* */
