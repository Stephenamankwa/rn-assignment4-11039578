import React, { useState } from 'react';
import {
  View, Text, Image, TextInput, StyleSheet, FlatList, TouchableOpacity, Alert, Modal, Button
} from 'react-native';

const JobCard = ({ job }) => (
    <TouchableOpacity style={styles.jobCard}>
      <Image source={{ uri: job.icon }} style={styles.jobIcon} />
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text style={styles.jobCompany}>{job.company}</Text>
      <Text style={styles.jobSalary}>{job.salary}</Text>
      <Text style={styles.jobLocation}>{job.location}</Text>
    </TouchableOpacity>
);

const PopularJobCard = ({ job }) => (
    <TouchableOpacity style={styles.popularJobCard}>
      <Image source={{ uri: job.icon }} style={styles.popularJobIcon} />
      <View style={styles.popularJobTextContainer}>
        <Text style={styles.popularJobTitle}>{job.title}</Text>
        <Text style={styles.popularJobCompany}>{job.company}</Text>
        <Text style={styles.popularJobSalary}>{job.salary}</Text>
        <Text style={styles.popularJobLocation}>{job.location}</Text>
      </View>
    </TouchableOpacity>
);

const initialFeaturedJobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' },
  { id: '2', title: 'Data Scientist', company: 'Google', salary: '$160,000', location: 'California, US', icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965309.png' },
  { id: '3', title: 'Frontend Developer', company: 'Apple', salary: '$150,000', location: 'New York, US', icon: 'https://cdn-icons-png.flaticon.com/512/1532/1532495.png' },
  { id: '4', title: 'Backend Developer', company: 'Microsoft', salary: '$140,000', location: 'Seattle, US', icon: 'https://cdn-icons-png.flaticon.com/512/732/732221.png' },
  { id: '5', title: 'UI/UX Designer', company: 'Amazon', salary: '$130,000', location: 'Boston, US', icon: 'https://cdn-icons-png.flaticon.com/512/889/889110.png' },
  { id: '6', title: 'DevOps Engineer', company: 'Youtube', salary: '$170,000', location: 'San Francisco, US', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' },
  { id: '7', title: 'QA Engineer', company: 'Linkedin', salary: '$120,000', location: 'Austin, US', icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
  { id: '8', title: 'Systems Analyst', company: 'Messenger', salary: '$110,000', location: 'Chicago, US', icon: 'https://cdn-icons-png.flaticon.com/512/733/733548.png' },
];

const initialPopularJobs = [
  { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/640px-Burger_King_logo_%281999%29.svg.png' },
  { id: '2', title: 'Product Manager', company: 'Instagram', salary: '$84,000/y', location: 'Florida, US', icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' },
  { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' },
  { id: '4', title: 'Software Engineer', company: 'Stevac', salary: '$150,000/y', location: 'Palo Alto, US', icon: 'https://cdn-icons-png.flaticon.com/512/873/873120.png' },
  { id: '5', title: 'Marketing Manager', company: 'Nshews', salary: '$100,000/y', location: 'Atlanta, US', icon: 'https://cdn-icons-png.flaticon.com/512/726/726471.png' },
  { id: '6', title: 'HR Manager', company: 'Apple', salary: '$110,000/y', location: 'Portland, US', icon: 'https://cdn-icons-png.flaticon.com/512/0/747.png' },
  { id: '7', title: 'Financial Analyst', company: 'Amazon', salary: '$120,000/y', location: 'New York, US', icon: 'https://cdn-icons-png.flaticon.com/512/888/888887.png' },
  { id: '8', title: 'Operations Manager', company: 'Goldman Sachs', salary: '$130,000/y', location: 'Seattle, US', icon: 'https://cdn-icons-png.flaticon.com/512/1136/1136475.png' },
];

const HomepageScreen = ({ name, email }) => {
  const [featuredJobs, setFeaturedJobs] = useState(initialFeaturedJobs);
  const [popularJobs, setPopularJobs] = useState(initialPopularJobs);
  const [modalVisible, setModalVisible] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    title: '',
    company: '',
    salary: '',
    location: '',
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
  });

  const handleAddJob = () => {
    setModalVisible(true);
  };

  const handleSaveJob = () => {
    const newJob = {
      id: (featuredJobs.length + 1).toString(),
      ...jobDetails,
    };
    setFeaturedJobs([...featuredJobs, newJob]);
    setModalVisible(false);
    Alert.alert("New Job Added", "A new job has been added to the featured jobs list.");
    setJobDetails({
      title: '',
      company: '',
      salary: '',
      location: '',
      icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
    });
  };

  const handleChange = (name, value) => {
    setJobDetails({ ...jobDetails, [name]: value });
  };

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
              style={styles.profileImage}
          />
        </View>
        <View style={styles.searchSection}>
          <TextInput style={styles.searchInput} placeholder="Search a job or position" />
          <TouchableOpacity style={styles.addButton} onPress={handleAddJob}>
            <Text style={styles.addButtonText}>Add Job</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <FlatList
            horizontal
            data={featuredJobs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <JobCard job={item} />}
            contentContainerStyle={styles.listContainer}
        />
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <FlatList
            data={popularJobs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PopularJobCard job={item} />}
            contentContainerStyle={styles.listContainer}
        />
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add New Job</Text>
            <TextInput
                style={styles.input}
                placeholder="Job Title"
                value={jobDetails.title}
                onChangeText={(text) => handleChange('title', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Company"
                value={jobDetails.company}
                onChangeText={(text) => handleChange('company', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Salary"
                value={jobDetails.salary}
                onChangeText={(text) => handleChange('salary', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Location"
                value={jobDetails.location}
                onChangeText={(text) => handleChange('location', text)}
            />
            <Button title="Save" onPress={handleSaveJob} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileSection: {
    flex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  jobCard: {
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 200,
    alignItems: 'center',
  },
  jobIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobCompany: {
    color: 'gray',
    marginBottom: 5,
  },
  jobSalary: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobLocation: {
    color: 'gray',
  },
  popularJobCard: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  popularJobIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  popularJobTextContainer: {
    flex: 1,
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularJobCompany: {
    color: 'gray',
  },
  popularJobSalary: {
    fontWeight: 'bold',
  },
  popularJobLocation: {
    color: 'gray',
  },
});

export default HomepageScreen;
