<?php

namespace AttendanceRegBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('AttendanceRegBundle:Default:index.html.twig');
    }
}
