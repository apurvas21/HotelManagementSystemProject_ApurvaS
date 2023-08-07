package Project.HotelManagementSystemA.Service;

import java.util.Set;

import Project.HotelManagementSystemA.Model.Customer;

public interface CustomerService {
	//create
	public Customer addCustomer(Customer customer);
	
	//read / get customer by username
	public Customer getCustomer(String username);
	
	public Customer getCustomerById(Long customerid);
	
	public Set<Customer> getCustomers();
	
	//delete
	public void deleteCustomer(Long customerid);
	
	//update
	public Customer updateCustomer(Customer customer);

}
