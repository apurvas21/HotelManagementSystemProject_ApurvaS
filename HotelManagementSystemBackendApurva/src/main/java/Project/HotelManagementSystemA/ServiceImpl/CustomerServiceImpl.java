package Project.HotelManagementSystemA.ServiceImpl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.RequestBody;

import Project.HotelManagementSystemA.Model.Customer;
import Project.HotelManagementSystemA.Repo.CustomerRepository;
import Project.HotelManagementSystemA.Service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService
{
	@Autowired
	private CustomerRepository customerRepository;

	//create
	@Override
	public Customer addCustomer(Customer customer)
	{		
		return this.customerRepository.save(customer);
	}
	
	//read
	@Override
	public Customer getCustomer(String username) {
		// TODO Auto-generated method stub
		return this.customerRepository.findByUsername(username);
	}
	
	//read all
	@Override
	public Set<Customer> getCustomers() {
		// TODO Auto-generated method stub
		return new LinkedHashSet<>(this.customerRepository.findAll());
	}
	
	//delete
	@Override
	public void deleteCustomer(Long customerid) {
		// TODO Auto-generated method stub
		this.customerRepository.deleteById(customerid);
	}
	
	//update
	@Override
	public Customer updateCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return this.customerRepository.save(customer);
	}

	@Override
	public Customer getCustomerById(Long customerid) {
		// TODO Auto-generated method stub
		return this.customerRepository.findByCustomerid(customerid);
	}
	
}
