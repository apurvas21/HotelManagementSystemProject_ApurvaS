package Project.HotelManagementSystemA.Model;

import java.time.LocalDateTime;
//import java.util.List;

import jakarta.persistence.CascadeType;

//import com.fasterxml.jackson.annotation.JsonIgnore;

//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Column;
import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="customerDetails")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long customerid;
	private String username;
	private String password;
	private String firstname;
	private String lastname;
	private Long phoneno;
	private String email;
	private String address;
	private String city;
	
	private boolean enabled=true;
	
	private LocalDateTime checkin;
	private LocalDateTime checkout;
	private Integer countPeople;
	private String roomType;
	private Integer noOfDays;
	private Integer roomPrice;
	private Integer finalPrice;
	
	
	//private List<roomtype> room_type = new ArrayList<roomtype>();
	//room_type.add(room_type);
	
	//List<RoomType> roomTypes;
	//roomTypes = new ArrayList<>();

	
	
	@OneToMany(cascade = CascadeType.ALL)
	//@OneToMany(mappedBy = "customer")
	//@JoinColumn(name="customerid")
	
//	private List<Room> room;
	
	
	//Getters, Setters, Constructors using Fields, Superclass, toString()
	
	public Long getCustomerid() {
		return customerid;
	}


	public void setCustomerid(Long customerid) {
		this.customerid = customerid;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public Long getPhoneno() {
		return phoneno;
	}


	public void setPhoneno(Long phoneno) {
		this.phoneno = phoneno;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public boolean isEnabled() {
		return enabled;
	}


	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}


	public LocalDateTime getCheckin() {
		return checkin;
	}


	public void setCheckin(LocalDateTime checkin) {
		this.checkin = checkin;
	}


	public LocalDateTime getCheckout() {
		return checkout;
	}


	public void setCheckout(LocalDateTime checkout) {
		this.checkout = checkout;
	}


	public Integer getCountPeople() {
		return countPeople;
	}


	public void setCountPeople(Integer countPeople) {
		this.countPeople = countPeople;
	}


	public String getRoomType() {
		return roomType;
	}


	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}


	public Integer getNoOfDays() {
		return noOfDays;
	}


	public void setNoOfDays(Integer noOfDays) {
		this.noOfDays = noOfDays;
	}


	public Integer getRoomPrice() {
		return roomPrice;
	}


	public void setRoomPrice(Integer roomPrice) {
		this.roomPrice = roomPrice;
	}


	public Integer getFinalPrice() {
		return finalPrice;
	}


	public void setFinalPrice(Integer finalPrice) {
		this.finalPrice = finalPrice;
	}


//	public List<Room> getRoom() {
//		return room;
//	}
//
//
//	public void setRoom(List<Room> room) {
//		this.room = room;
//	}


	public Customer(Long customerid, String username, String password, String firstname, String lastname,
			Long phoneno, String email, String address, String city, boolean enabled, LocalDateTime checkin,
			LocalDateTime checkout, Integer countPeople, String roomType, Integer noOfDays, Integer roomPrice,
			Integer finalPrice) /*, List<Room> room*/
	{
		super();
		this.customerid = customerid;
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.phoneno = phoneno;
		this.email = email;
		this.address = address;
		this.city = city;
		this.enabled = enabled;
		this.checkin = checkin;
		this.checkout = checkout;
		this.countPeople = countPeople;
		this.roomType = roomType;
		this.noOfDays = noOfDays;
		this.roomPrice = roomPrice;
		this.finalPrice = finalPrice;
//		this.room = room;
	}


	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}


	@Override
	public String toString() {
		return "Customer [customerid=" + customerid + ", username=" + username + ", password=" + password
				+ ", firstname=" + firstname + ", lastname=" + lastname + ", phoneno=" + phoneno + ", email=" + email
				+ ", address=" + address + ", city=" + city + ", enabled=" + enabled + ", checkin=" + checkin
				+ ", checkout=" + checkout + ", countPeople=" + countPeople + ", roomType=" + roomType + ", noOfDays="
				+ noOfDays + ", roomPrice=" + roomPrice + ", finalPrice=" + finalPrice + "]"; /*, room=" + room + "*/
	}
	
	
}


	
