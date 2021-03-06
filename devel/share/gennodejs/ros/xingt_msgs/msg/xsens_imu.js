// Auto-generated. Do not edit!

// (in-package xingt_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let geometry_msgs = _finder('geometry_msgs');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class xsens_imu {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.temperature = null;
      this.orientation = null;
      this.orientation_covariance = null;
      this.euler_angles = null;
      this.angular_velocity = null;
      this.angular_velocity_covariance = null;
      this.linear_acceleration = null;
      this.linear_acceleration_covariance = null;
      this.free_acceleration = null;
      this.dv = null;
      this.dq = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('temperature')) {
        this.temperature = initObj.temperature
      }
      else {
        this.temperature = 0.0;
      }
      if (initObj.hasOwnProperty('orientation')) {
        this.orientation = initObj.orientation
      }
      else {
        this.orientation = new geometry_msgs.msg.Quaternion();
      }
      if (initObj.hasOwnProperty('orientation_covariance')) {
        this.orientation_covariance = initObj.orientation_covariance
      }
      else {
        this.orientation_covariance = new Array(9).fill(0);
      }
      if (initObj.hasOwnProperty('euler_angles')) {
        this.euler_angles = initObj.euler_angles
      }
      else {
        this.euler_angles = new geometry_msgs.msg.Vector3();
      }
      if (initObj.hasOwnProperty('angular_velocity')) {
        this.angular_velocity = initObj.angular_velocity
      }
      else {
        this.angular_velocity = new geometry_msgs.msg.Vector3();
      }
      if (initObj.hasOwnProperty('angular_velocity_covariance')) {
        this.angular_velocity_covariance = initObj.angular_velocity_covariance
      }
      else {
        this.angular_velocity_covariance = new Array(9).fill(0);
      }
      if (initObj.hasOwnProperty('linear_acceleration')) {
        this.linear_acceleration = initObj.linear_acceleration
      }
      else {
        this.linear_acceleration = new geometry_msgs.msg.Vector3();
      }
      if (initObj.hasOwnProperty('linear_acceleration_covariance')) {
        this.linear_acceleration_covariance = initObj.linear_acceleration_covariance
      }
      else {
        this.linear_acceleration_covariance = new Array(9).fill(0);
      }
      if (initObj.hasOwnProperty('free_acceleration')) {
        this.free_acceleration = initObj.free_acceleration
      }
      else {
        this.free_acceleration = new geometry_msgs.msg.Vector3();
      }
      if (initObj.hasOwnProperty('dv')) {
        this.dv = initObj.dv
      }
      else {
        this.dv = new geometry_msgs.msg.Vector3();
      }
      if (initObj.hasOwnProperty('dq')) {
        this.dq = initObj.dq
      }
      else {
        this.dq = new geometry_msgs.msg.Quaternion();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type xsens_imu
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [temperature]
    bufferOffset = _serializer.float32(obj.temperature, buffer, bufferOffset);
    // Serialize message field [orientation]
    bufferOffset = geometry_msgs.msg.Quaternion.serialize(obj.orientation, buffer, bufferOffset);
    // Check that the constant length array field [orientation_covariance] has the right length
    if (obj.orientation_covariance.length !== 9) {
      throw new Error('Unable to serialize array field orientation_covariance - length must be 9')
    }
    // Serialize message field [orientation_covariance]
    bufferOffset = _arraySerializer.float64(obj.orientation_covariance, buffer, bufferOffset, 9);
    // Serialize message field [euler_angles]
    bufferOffset = geometry_msgs.msg.Vector3.serialize(obj.euler_angles, buffer, bufferOffset);
    // Serialize message field [angular_velocity]
    bufferOffset = geometry_msgs.msg.Vector3.serialize(obj.angular_velocity, buffer, bufferOffset);
    // Check that the constant length array field [angular_velocity_covariance] has the right length
    if (obj.angular_velocity_covariance.length !== 9) {
      throw new Error('Unable to serialize array field angular_velocity_covariance - length must be 9')
    }
    // Serialize message field [angular_velocity_covariance]
    bufferOffset = _arraySerializer.float64(obj.angular_velocity_covariance, buffer, bufferOffset, 9);
    // Serialize message field [linear_acceleration]
    bufferOffset = geometry_msgs.msg.Vector3.serialize(obj.linear_acceleration, buffer, bufferOffset);
    // Check that the constant length array field [linear_acceleration_covariance] has the right length
    if (obj.linear_acceleration_covariance.length !== 9) {
      throw new Error('Unable to serialize array field linear_acceleration_covariance - length must be 9')
    }
    // Serialize message field [linear_acceleration_covariance]
    bufferOffset = _arraySerializer.float64(obj.linear_acceleration_covariance, buffer, bufferOffset, 9);
    // Serialize message field [free_acceleration]
    bufferOffset = geometry_msgs.msg.Vector3.serialize(obj.free_acceleration, buffer, bufferOffset);
    // Serialize message field [dv]
    bufferOffset = geometry_msgs.msg.Vector3.serialize(obj.dv, buffer, bufferOffset);
    // Serialize message field [dq]
    bufferOffset = geometry_msgs.msg.Quaternion.serialize(obj.dq, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type xsens_imu
    let len;
    let data = new xsens_imu(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [temperature]
    data.temperature = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [orientation]
    data.orientation = geometry_msgs.msg.Quaternion.deserialize(buffer, bufferOffset);
    // Deserialize message field [orientation_covariance]
    data.orientation_covariance = _arrayDeserializer.float64(buffer, bufferOffset, 9)
    // Deserialize message field [euler_angles]
    data.euler_angles = geometry_msgs.msg.Vector3.deserialize(buffer, bufferOffset);
    // Deserialize message field [angular_velocity]
    data.angular_velocity = geometry_msgs.msg.Vector3.deserialize(buffer, bufferOffset);
    // Deserialize message field [angular_velocity_covariance]
    data.angular_velocity_covariance = _arrayDeserializer.float64(buffer, bufferOffset, 9)
    // Deserialize message field [linear_acceleration]
    data.linear_acceleration = geometry_msgs.msg.Vector3.deserialize(buffer, bufferOffset);
    // Deserialize message field [linear_acceleration_covariance]
    data.linear_acceleration_covariance = _arrayDeserializer.float64(buffer, bufferOffset, 9)
    // Deserialize message field [free_acceleration]
    data.free_acceleration = geometry_msgs.msg.Vector3.deserialize(buffer, bufferOffset);
    // Deserialize message field [dv]
    data.dv = geometry_msgs.msg.Vector3.deserialize(buffer, bufferOffset);
    // Deserialize message field [dq]
    data.dq = geometry_msgs.msg.Quaternion.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 404;
  }

  static datatype() {
    // Returns string type for a message object
    return 'xingt_msgs/xsens_imu';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0be8442b6411af5cd0fa95a70e55adf9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This is a message to hold data from an IMU (Inertial Measurement Unit)
    #
    # Accelerations should be in m/s^2 (not in g's), and rotational velocity should be in rad/sec
    #
    # If the covariance of the measurement is known, it should be filled in (if all you know is the 
    # variance of each measurement, e.g. from the datasheet, just put those along the diagonal)
    # A covariance matrix of all zeros will be interpreted as "covariance unknown", and to use the
    # data a covariance will have to be assumed or gotten from some other source
    #
    # If you have no estimate for one of the data elements (e.g. your IMU doesn't produce an orientation 
    # estimate), please set element 0 of the associated covariance matrix to -1
    # If you are interpreting this message, please check for a value of -1 in the first element of each 
    # covariance matrix, and disregard the associated estimate.
    
    Header header
    
    float32 temperature
    
    geometry_msgs/Quaternion orientation
    float64[9] orientation_covariance # ?????????Row major about x, y, z axes
    
    geometry_msgs/Vector3 euler_angles # ?????????
    
    geometry_msgs/Vector3 angular_velocity
    float64[9] angular_velocity_covariance # ?????????Row major about x, y, z axes
    
    geometry_msgs/Vector3 linear_acceleration
    float64[9] linear_acceleration_covariance # ????????????Row major x, y z 
    
    
    geometry_msgs/Vector3 free_acceleration  # ??????????????????Row major x, y z 
    
    geometry_msgs/Vector3 dv  # delta velocity Row major x, y z 
    
    
    geometry_msgs/Quaternion dq 
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new xsens_imu(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.temperature !== undefined) {
      resolved.temperature = msg.temperature;
    }
    else {
      resolved.temperature = 0.0
    }

    if (msg.orientation !== undefined) {
      resolved.orientation = geometry_msgs.msg.Quaternion.Resolve(msg.orientation)
    }
    else {
      resolved.orientation = new geometry_msgs.msg.Quaternion()
    }

    if (msg.orientation_covariance !== undefined) {
      resolved.orientation_covariance = msg.orientation_covariance;
    }
    else {
      resolved.orientation_covariance = new Array(9).fill(0)
    }

    if (msg.euler_angles !== undefined) {
      resolved.euler_angles = geometry_msgs.msg.Vector3.Resolve(msg.euler_angles)
    }
    else {
      resolved.euler_angles = new geometry_msgs.msg.Vector3()
    }

    if (msg.angular_velocity !== undefined) {
      resolved.angular_velocity = geometry_msgs.msg.Vector3.Resolve(msg.angular_velocity)
    }
    else {
      resolved.angular_velocity = new geometry_msgs.msg.Vector3()
    }

    if (msg.angular_velocity_covariance !== undefined) {
      resolved.angular_velocity_covariance = msg.angular_velocity_covariance;
    }
    else {
      resolved.angular_velocity_covariance = new Array(9).fill(0)
    }

    if (msg.linear_acceleration !== undefined) {
      resolved.linear_acceleration = geometry_msgs.msg.Vector3.Resolve(msg.linear_acceleration)
    }
    else {
      resolved.linear_acceleration = new geometry_msgs.msg.Vector3()
    }

    if (msg.linear_acceleration_covariance !== undefined) {
      resolved.linear_acceleration_covariance = msg.linear_acceleration_covariance;
    }
    else {
      resolved.linear_acceleration_covariance = new Array(9).fill(0)
    }

    if (msg.free_acceleration !== undefined) {
      resolved.free_acceleration = geometry_msgs.msg.Vector3.Resolve(msg.free_acceleration)
    }
    else {
      resolved.free_acceleration = new geometry_msgs.msg.Vector3()
    }

    if (msg.dv !== undefined) {
      resolved.dv = geometry_msgs.msg.Vector3.Resolve(msg.dv)
    }
    else {
      resolved.dv = new geometry_msgs.msg.Vector3()
    }

    if (msg.dq !== undefined) {
      resolved.dq = geometry_msgs.msg.Quaternion.Resolve(msg.dq)
    }
    else {
      resolved.dq = new geometry_msgs.msg.Quaternion()
    }

    return resolved;
    }
};

module.exports = xsens_imu;
