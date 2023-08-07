package Project.HotelManagementSystemA.Controller;

//import java.util.HashSet;
//import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Project.HotelManagementSystemA.Model.Customer;
import Project.HotelManagementSystemA.Service.CustomerService;
//import Project.HotelManagementSystemA.UnusedClasses.CustomerRole;
//import Project.HotelManagementSystemA.UnusedClasses.Role;

@RestController
@RequestMapping("/customer")
@CrossOrigin("*")	//http://localhost:4200
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	//create record
	@PostMapping("/save")
	public Customer addCustomer(@RequestBody Customer customer) {
		return this.customerService.addCustomer(customer);
		//customerService.addCustomer(customer);
		//return customer;
	}
	
	//read the record(specific)
	@GetMapping("/{username}")
	public Customer getCustomer(@PathVariable("username")String username) {
		return this.customerService.getCustomer(username);
	}
	
	//get customer by id
	@GetMapping("/getCustomerById/{customerid}")
	public Customer getCustomer(@PathVariable("customerid")Long customerid) {
		return this.customerService.getCustomerById(customerid);
	}
	
	//read all records
	@GetMapping("/getAllCustomers")
	public ResponseEntity<?> getCustomers()
	{
		return ResponseEntity.ok(this.customerService.getCustomers());
	}
	
	//update the record
	 //@PutMapping("/{username}")
//	@PutMapping("/update")
//	 public Customer updateCustomer(@RequestBody Customer customer) {
//		 return this.customerService.updateCustomer(customer);
//	 }

	  @PutMapping("/update/{customerid}")
	   public ResponseEntity<Customer> updateCustomer(@PathVariable Long customerid, @RequestBody Customer updatedCustomer) {
	        // Fetch the existing customer from the database
	        Customer existingCustomer = customerService.getCustomerById(customerid);
	        if (existingCustomer == null) {
	            return ResponseEntity.notFound().build();
	        }

	        // Update the existing customer with the data from the updatedCustomer
	        existingCustomer.setUsername(updatedCustomer.getUsername());
	        existingCustomer.setFirstname(updatedCustomer.getFirstname());
	        existingCustomer.setLastname(updatedCustomer.getLastname());
	        existingCustomer.setAddress(updatedCustomer.getAddress());
	        existingCustomer.setCity(updatedCustomer.getCity());
	        existingCustomer.setEmail(updatedCustomer.getEmail());
	        existingCustomer.setPhoneno(updatedCustomer.getPhoneno());
	        existingCustomer.setCheckin(updatedCustomer.getCheckin());
	        existingCustomer.setCheckout(updatedCustomer.getCheckout());
	        existingCustomer.setCountPeople(updatedCustomer.getCountPeople());
	        existingCustomer.setRoomType(updatedCustomer.getRoomType());

	        // Save the updated customer to the database
	        Customer savedCustomer = customerService.updateCustomer(existingCustomer);
	        return ResponseEntity.ok(savedCustomer);
	   }
	 	 
	 //delete the record
	 @DeleteMapping("/deleteCustomer/{customerid}")
	public void deleteCustomer(@PathVariable("customerid")Long customerid)
	{
		this.customerService.deleteCustomer(customerid);
	}
}
