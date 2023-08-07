package Project.HotelManagementSystemA.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import Project.HotelManagementSystemA.Model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{
	public Customer findByUsername (String username);
	
	public Customer findByCustomerid(Long customerid);

}
