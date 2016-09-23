<?php

namespace AttendanceRegBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EmployeeType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('attendanceMachineEmployeeId', 'number', array(
                'label' => 'attendanceMachineEmployeeId',
            ))
            ->add('employeeId', 'text', array(
                'label' => 'employeeId',
            ))
            ->add('employeeName', 'text', array(
                'label' => 'employeeName',
            ))
            ->add('address', 'textarea', array(
                'label' => 'address',
            ))
            ->add('mobile', 'text', array(
                'label' => 'mobile_one',
            ))
            ->add('phone', 'text', array(
                'label' => 'phone',
            ))
            ->add('email', 'text', array(
                'label' => 'email',
            ))
        ;
    }
    
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AttendanceRegBundle\Entity\Employee'
        ));
    }
}
