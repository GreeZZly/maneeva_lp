<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller { 
	public function __construct(){
		parent::__construct();
	}

	public function	index(){
		$this->load->helper(array('form', 'url'));

		$this->load->library('form_validation');
		$this->load->view('index.html');
	}
	public function order(){
		// $this->load->model('heroin');
		$this->load->helper(array('form', 'url'));
		$this->load->library('form_validation');
		$this->load->library('email');
		
		$this->form_validation->set_rules('name', 'Имя', 'required|min_length[2]|max_length[16]');
		$this->form_validation->set_rules('surname', 'Фамилия', 'required|min_length[2]|max_length[20]');
		$this->form_validation->set_rules('second_name', 'Отчество', 'required|min_length[5]|max_length[20]');
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('phone', 'Телефон', 'required|numeric');

		if ($this->form_validation->run() == FALSE)
		{
			$this->load->view('main/htmlheader.html');
			$this->load->view('main/form_php');
			$this->load->view('main/htmlfooter.html');
		}
		else
		{
			$data = array('name' => $this->input->post('name'),
							'surname' => $this->input->post('surname'),
							'second_name' => $this->input->post('second_name'),
							'email' => $this->input->post('email'),
							'phone' => $this->input->post('phone')
				);
			// $data['type']='individual';
			// $data['captured']=1;
		   	// $this->heroin->setCustomer(null,$data);
			$config['mailtype'] = 'text';
			// $config['mailpath'] = '/usr/sbin/sendmail';
			// $config['charset'] = 'iso-8859-1';
			// $config['wordwrap'] = FALSE;
			// $config['newline'] = TRUE;

			$this->email->initialize($config);

			$this->email->clear();
		    $this->email->to('maneevat@mail.ru');
		    $this->email->from('LandingPage');
		    $this->email->subject('Новая заявка!');
		    $this->email->message("Привет!\nПоступила заявка от\nФамилия: ".$data['surname']."\nИмя: ".$data['name']."\nОтчество :".$data['second_name']."\nАдрес: ".$data['email']."\nТелефон: ".$data['phone']."");
		    $this->email->send();
		   

			$this->load->view('main/htmlheader.html');
			$this->load->view('main/formsuccess');
			$this->load->view('main/htmlfooter.html');
		}
		
	}
	public function order_book(){
		// $this->load->model('heroin');
		$this->load->helper(array('form', 'url'));
		$this->load->library('form_validation');
		$this->load->library('email');
		
		$this->form_validation->set_rules('name_book', 'Имя', 'required|min_length[2]|max_length[16]');
		$this->form_validation->set_rules('email_book', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('phone_book', 'Телефон', 'required|numeric');

		if ($this->form_validation->run() == FALSE)
		{
			$this->load->view('main/htmlheader.html');
			$this->load->view('main/form_php');
			$this->load->view('main/htmlfooter.html');
		}
		else
		{
			$data = array('name_book' => $this->input->post('name_book'),
							'email_book' => $this->input->post('email_book'),
							'phone_book' => $this->input->post('phone_book')
				);
			// $data['type']='individual';
			// $data['captured']=1;
		   	// $this->heroin->setCustomer(null,$data);
			$config['mailtype'] = 'text';
			// $config['mailpath'] = '/usr/sbin/sendmail';
			// $config['charset'] = 'iso-8859-1';
			// $config['wordwrap'] = FALSE;
			// $config['newline'] = TRUE;

			$this->email->initialize($config);

			$this->email->clear();
		    $this->email->to('maneevat@mail.ru');
		    $this->email->from('LandingPage');
		    $this->email->subject('Скачал книгу!');
		    $this->email->message("Привет!\nСкачал книгу: \nИмя: ".$data['name_book']."\nАдрес: ".$data['email_book']."\nТелефон: ".$data['phone_book']."");
		    if($this->email->send()){
		    	echo json_encode(array('src'=>'/include/files/book.zip'));
		    }
		   	else echo false;
			// $this->load->view('main/htmlheader.html');
			// $this->load->view('main/formsuccess');
			// $this->load->view('main/htmlfooter.html');
		}
		
	}

	public function form_php(){
			$this->load->helper(array('form', 'url'));
			$this->load->library('form_validation');
			$this->load->view('main/htmlheader.html');
			$this->load->view('main/form_php');
			$this->load->view('main/htmlfooter.html');
	}
}
