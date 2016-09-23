<?php

namespace AttendanceRegBundle\Entity;

/**
 * Attendance
 */
class Attendance
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var \DateTime
     */
    private $attendanceDatetime;
    /**
     * @var
     */
    private $employee;

    /**
     * @return mixed
     */
    public function getEmployee()
    {
        return $this->employee;
    }

    /**
     * @param mixed $employee
     */
    public function setEmployee($employee)
    {
        $this->employee = $employee;
    }

    /**
     * @var string
     */
    private $attendanceType;

    /**
     * @var \DateTime
     */
    private $importDate;

    /**
     * @var \Eit\Bundle\HrBundle\Entity\Employee
     */
    private $employeeId;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set attendanceDatetime
     *
     * @param \DateTime $attendanceDatetime
     *
     * @return Attendance
     */
    public function setAttendanceDatetime($attendanceDatetime)
    {
        $this->attendanceDatetime = $attendanceDatetime;

        return $this;
    }

    /**
     * Get attendanceDatetime
     *
     * @return \DateTime
     */
    public function getAttendanceDatetime()
    {
        return $this->attendanceDatetime;
    }

    /**
     * Set attendanceType
     *
     * @param string $attendanceType
     *
     * @return Attendance
     */
    public function setAttendanceType($attendanceType)
    {
        $this->attendanceType = $attendanceType;

        return $this;
    }

    /**
     * Get attendanceType
     *
     * @return string
     */
    public function getAttendanceType()
    {
        return $this->attendanceType;
    }

    /**
     * Set importDate
     *
     * @param \DateTime $importDate
     *
     * @return Attendance
     */
    public function setImportDate($importDate)
    {
        $this->importDate = $importDate;

        return $this;
    }

    /**
     * Get importDate
     *
     * @return \DateTime
     */
    public function getImportDate()
    {
        return $this->importDate;
    }

    /**
     * Set employeeId
     *
     * @param \Eit\Bundle\HrBundle\Entity\Employee $employeeId
     *
     * @return Attendance
     */
    public function setEmployeeId(\Eit\Bundle\HrBundle\Entity\Employee $employeeId = null)
    {
        $this->employeeId = $employeeId;

        return $this;
    }

    /**
     * Get employeeId
     *
     * @return \Eit\Bundle\HrBundle\Entity\Employee
     */
    public function getEmployeeId()
    {
        return $this->employeeId;
    }
}

