//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FinalYearProject.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Appointment
    {
        public int Appointment_Id { get; set; }
        public int Pat_Id { get; set; }
        public int Doc_Id { get; set; }
        public System.DateTime Date { get; set; }
        public System.TimeSpan Start { get; set; }
        public System.TimeSpan End { get; set; }
    
        public virtual Doctor Doctor { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
