using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace TestApplication.Models
{
    public class Common
    {
        public static DataTable ExecuteProcedure(string ProcdureName,string[,] Param)
        {
            SqlConnection con = new SqlConnection(System.Configuration.ConfigurationManager.AppSettings.Get("DBConnection"));
            SqlCommand cmd = new SqlCommand(ProcdureName, con);
            cmd.CommandType = CommandType.StoredProcedure;
            for(int i = 0; i < Param.Length / 2; i++)
            {
                cmd.Parameters.AddWithValue(Param[i, 0], Param[i, 1]);
            }
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }

        public static DataTable ExecuteProcedure(string ProcdureName)
        {
            SqlConnection con = new SqlConnection(System.Configuration.ConfigurationManager.AppSettings.Get("DBConnection"));
            SqlCommand cmd = new SqlCommand(ProcdureName, con);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            return dt;
        }
    }
}