﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalYearProject.Models
{
    public class Full_Patient
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string CNIC { get; set; }
        public DateTime? DOB { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Image_Path { get; set; }
        public string Blood_Group { get; set; }
        public string Insurance_No { get; set; }
    }
}