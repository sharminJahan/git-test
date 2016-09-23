<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * appProdUrlMatcher.
 *
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appProdUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    /**
     * Constructor.
     */
    public function __construct(RequestContext $context)
    {
        $this->context = $context;
    }

    public function match($pathinfo)
    {
        $allow = array();
        $pathinfo = rawurldecode($pathinfo);
        $context = $this->context;
        $request = $this->request;

        if (0 === strpos($pathinfo, '/employee')) {
            // employee_index
            if (rtrim($pathinfo, '/') === '/employee') {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_employee_index;
                }

                if (substr($pathinfo, -1) !== '/') {
                    return $this->redirect($pathinfo.'/', 'employee_index');
                }

                return array (  '_controller' => 'AttendanceRegBundle\\Controller\\EmployeeController::indexAction',  '_route' => 'employee_index',);
            }
            not_employee_index:

            // employee_show
            if (preg_match('#^/employee/(?P<id>[^/]++)/show$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_employee_show;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'employee_show')), array (  '_controller' => 'AttendanceRegBundle\\Controller\\EmployeeController::showAction',));
            }
            not_employee_show:

            // employee_new
            if ($pathinfo === '/employee/new') {
                if (!in_array($this->context->getMethod(), array('GET', 'POST', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'POST', 'HEAD'));
                    goto not_employee_new;
                }

                return array (  '_controller' => 'AttendanceRegBundle\\Controller\\EmployeeController::newAction',  '_route' => 'employee_new',);
            }
            not_employee_new:

            // employee_edit
            if (preg_match('#^/employee/(?P<id>[^/]++)/edit$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'POST', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'POST', 'HEAD'));
                    goto not_employee_edit;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'employee_edit')), array (  '_controller' => 'AttendanceRegBundle\\Controller\\EmployeeController::editAction',));
            }
            not_employee_edit:

            // employee_delete
            if (preg_match('#^/employee/(?P<id>[^/]++)/delete$#s', $pathinfo, $matches)) {
                if ($this->context->getMethod() != 'DELETE') {
                    $allow[] = 'DELETE';
                    goto not_employee_delete;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'employee_delete')), array (  '_controller' => 'AttendanceRegBundle\\Controller\\EmployeeController::deleteAction',));
            }
            not_employee_delete:

        }

        // attendance_form_submit
        if ($pathinfo === '/attendance/attendance_form_submit') {
            return array (  '_controller' => 'AttendanceRegBundle\\Controller\\AttendanceController::attendanceReportFormSubmitAction',  '_route' => 'attendance_form_submit',);
        }

        // attendance_reg_homepage
        if (rtrim($pathinfo, '/') === '') {
            if (substr($pathinfo, -1) !== '/') {
                return $this->redirect($pathinfo.'/', 'attendance_reg_homepage');
            }

            return array (  '_controller' => 'AttendanceRegBundle\\Controller\\DefaultController::indexAction',  '_route' => 'attendance_reg_homepage',);
        }

        // homepage
        if (rtrim($pathinfo, '/') === '') {
            if (substr($pathinfo, -1) !== '/') {
                return $this->redirect($pathinfo.'/', 'homepage');
            }

            return array (  '_controller' => 'AppBundle\\Controller\\DefaultController::indexAction',  '_route' => 'homepage',);
        }

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}
