package com.swapnilxi.reactcrm.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Contact {
    public @Id @GeneratedValue  long id; 
    public String firstName;
    public String lastName;
    public String email;

    private Contact(){

    }
   
    public Contact(String firstName, String lastName, String email) {
      
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    
}
 