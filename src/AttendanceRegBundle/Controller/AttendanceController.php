<?php
/**
 * Created by PhpStorm.
 * User: sharmin
 * Date: 11/23/15
 * Time: 10:07 AM
 */

namespace AttendanceRegBundle\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Kitpages\DataGridBundle\Grid\Field;
use Kitpages\DataGridBundle\Grid\GridConfig;
use Kitpages\DataGridBundle\Paginator\PaginatorConfig;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Doctrine\ORM\Query;


/**
 * Class AttendanceController
 * @package AttendanceRegBundle\Controller
 */
class AttendanceController extends Controller
{

    public function attendanceReportFormSubmitAction()
    {
        return $this->render('@AttendanceReg/Default/index.html.twig', array(
            'title' => 1,
        ));
    }





}
